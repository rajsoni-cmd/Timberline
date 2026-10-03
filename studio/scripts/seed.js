/**
 * ONE-TIME IMPORT of the current website content into Sanity.
 *
 *   cd studio
 *   npm run seed
 *
 * - Downloads every photo the site uses today and uploads it to Sanity.
 * - Creates categories, projects, testimonials, FAQs, team, banners and
 *   contact details exactly as they appear on the approved website.
 * - Safe to run again: anything that already exists is left untouched,
 *   so it will never overwrite edits the client has made.
 */
import {readFileSync} from 'node:fs'
import {LexoRank} from 'lexorank'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})
const data = JSON.parse(readFileSync(new URL('./seed-data.json', import.meta.url), 'utf8'))

// ── helpers ────────────────────────────────────────────────────────────
const uploaded = new Map()

async function image(url) {
  if (!url) return undefined
  if (!uploaded.has(url)) {
    uploaded.set(
      url,
      (async () => {
        let buffer
        if (url.startsWith('/')) {
          // Local copy made by frontend/scripts/localize-images.js
          buffer = readFileSync(new URL(`../../frontend/public${url}`, import.meta.url))
        } else {
          const res = await fetch(url)
          if (!res.ok) throw new Error(`Could not download ${url} (${res.status})`)
          buffer = Buffer.from(await res.arrayBuffer())
        }
        const filename = decodeURIComponent(url.split('?')[0].split('/').pop()) || 'image.jpg'
        const asset = await client.assets.upload('image', buffer, {filename})
        process.stdout.write('.')
        return asset._id
      })(),
    )
  }
  const assetId = await uploaded.get(url)
  return {_type: 'image', asset: {_type: 'reference', _ref: assetId}}
}

const withKey = (obj, i) => ({_key: `k${i}${Math.random().toString(36).slice(2, 8)}`, ...obj})

function ranks(n) {
  const out = []
  let r = LexoRank.min()
  for (let i = 0; i < n; i++) {
    r = r.genNext().genNext()
    out.push(r.toString())
  }
  return out
}

const docs = []

// ── contact details + home slider ─────────────────────────────────────
const s = data.settings
docs.push({
  _id: 'siteSettings',
  _type: 'siteSettings',
  phone: s.phone,
  email: s.email,
  addressLine1: s.addressLine1,
  addressLine2: s.addressLine2,
  facebook: s.facebook,
  instagram: s.instagram,
  linkedin: s.linkedin,
  heroSlides: await Promise.all(
    s.heroSlides.map(async (h, i) => withKey({...(await image(h.image)), alt: h.alt}, i)),
  ),
})

// ── page banners ──────────────────────────────────────────────────────
const banners = {_id: 'pageBanners', _type: 'pageBanners'}
for (const [key, b] of Object.entries(data.banners)) {
  banners[key] = {
    _type: 'pageBanner',
    eyebrow: b.eyebrow,
    title: b.title,
    subtitle: b.subtitle,
    image: await image(b.image),
  }
}
docs.push(banners)

// ── portfolio ─────────────────────────────────────────────────────────
const catRanks = ranks(data.categories.length)
for (const [i, c] of data.categories.entries()) {
  docs.push({
    _id: `category-${c.slug}`,
    _type: 'portfolioCategory',
    orderRank: catRanks[i],
    name: c.name,
    slug: {_type: 'slug', current: c.slug},
    tagline: c.tagline,
    description: c.description,
    cover: await image(c.cover),
  })
}

const projRanks = ranks(data.projects.length)
for (const [i, p] of data.projects.entries()) {
  const doc = {
    _id: `project-${p.slug}`,
    _type: 'project',
    orderRank: projRanks[i],
    name: p.name,
    slug: {_type: 'slug', current: p.slug},
    category: {_type: 'reference', _ref: `category-${p.category}`},
    location: p.location,
    description: p.description,
    cover: await image(p.cover),
  }
  if (p.pairs) {
    doc.pairs = await Promise.all(
      p.pairs.map(async (pair, j) =>
        withKey(
          {_type: 'beforeAfter', before: await image(pair.before), after: await image(pair.after), caption: pair.caption},
          j,
        ),
      ),
    )
  } else {
    doc.gallery = await Promise.all((p.gallery || []).map(async (url, j) => withKey(await image(url), j)))
  }
  docs.push(doc)
}

// ── testimonials ──────────────────────────────────────────────────────
const tRanks = ranks(data.testimonials.length)
for (const [i, t] of data.testimonials.entries()) {
  docs.push({
    _id: `testimonial-${i + 1}`,
    _type: 'testimonial',
    orderRank: tRanks[i],
    quote: t.quote,
    author: t.author,
    location: t.location,
    image: await image(t.image),
    showOnHome: !!t.showOnHome,
  })
}

// ── FAQs ──────────────────────────────────────────────────────────────
const fRanks = ranks(data.faqs.length)
data.faqs.forEach((f, i) =>
  docs.push({_id: `faq-${i + 1}`, _type: 'faq', orderRank: fRanks[i], question: f.question, answer: f.answer}),
)

// ── team ──────────────────────────────────────────────────────────────
const mRanks = ranks(data.team.length)
data.team.forEach((m, i) =>
  docs.push({
    _id: `team-${i + 1}`,
    _type: 'teamMember',
    orderRank: mRanks[i],
    name: m.name,
    title: m.title,
    since: m.since,
    group: m.group,
  }),
)

// ── write (never overwrite existing content) ──────────────────────────
const tx = client.transaction()
for (const d of docs) tx.createIfNotExists(JSON.parse(JSON.stringify(d)))
await tx.commit()

console.log(`\n\n✅ Done — ${docs.length} items and ${uploaded.size} photos imported.`)
console.log('Open the editor (npm run dev → http://localhost:3333) to check everything.')
