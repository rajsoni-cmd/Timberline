# Timberline Custom Homes: Setup Guide (Windows)

This guide takes the approved website live on **Cloudflare Pages** (free) and gives the client a **content editor** (Sanity, free) where she can update the website herself. The design, animations and mobile layout are unchanged.

**How it works**

```
Client edits in Sanity  →  clicks Publish  →  Cloudflare rebuilds the site (~2–3 min)  →  live
```

If Sanity is ever unreachable, the build stops and the **current live site stays online**, so a bad publish can't break the website.

---

## What the client can edit

| In the editor | Where it appears on the site |
|---|---|
| **Portfolio → Projects** | Add or edit projects, cover photo, photo gallery (drag & drop), location, description |
| **Portfolio → Before & After** | Renovations & Additions projects show Before/After sliders |
| **Portfolio → Categories** | Category cards, names, descriptions, cover photos, order |
| **Testimonials** | Testimonials page; ★ featured ones also appear on Home and About |
| **FAQs** | The FAQ section at the bottom of every page |
| **Team Members** | Office and Field team on the About page |
| **Page Banners** | Big photo, title and subtitle at the top of each page |
| **Contact Details & Home Slider** | Phone, email, address, social links, home page slider photos |

The longer body text on the Home, About, Process and What We Offer pages stays in code for now. It can be made editable later in the same way.

---

## What changed in the code

| File or folder | What it does |
|---|---|
| `studio/` | **New.** The client's content editor (Sanity Studio) |
| `studio/scripts/seed.js` | **New.** One-time import of all current content and photos into Sanity |
| `frontend/scripts/fetch-cms.js` | **New.** Downloads the published content before each build |
| `frontend/src/lib/cms.js`, `site.js` | **New.** Read content from the editor, falling back to the original content |
| `frontend/functions/api/contact.js` | **New.** Contact form email, replacing the Python backend |
| `frontend/scripts/localize-images.js` | **New.** Copies photos off Emergent's servers into the project |
| `frontend/public/index.html` | Proper page title and description for Google. Removed Emergent's script and its PostHog tracking code |
| `frontend/public/_redirects` | `timberlinecustomhomes.ca/studio` and `/admin` open the editor |
| `backend/` | **No longer used.** It can be deleted once the site is live |

Two small fixes were included:

- The Renovations card showed **"BEFORE &AMP; AFTER"**. It now reads **"BEFORE & AFTER"**.
- The site title was **"Emergent | Fullstack App"**. It's now **"Timberline Custom Homes | Custom Homes, Cottages & Boathouses in the Kawarthas"**.

---

## Step 0: Install the tools (one time, about 10 minutes)

1. **Node.js 22 LTS**: https://nodejs.org → download the **LTS** version (22.x or newer) → install with the default options.
2. **GitHub Desktop**: https://desktop.github.com → install → sign in as `rajsoni48879-a11y`.
3. Open **PowerShell** and check that Node.js is installed:
   ```powershell
   node -v
   ```
   It should print `v22.x.x` or higher.

---

## Step 1: Put this code in your GitHub repo

1. In GitHub Desktop: **File → Clone repository** → choose your **Timberline** repo → Clone.
2. Open the cloned folder (**Repository → Show in Explorer**).
3. Delete everything in it **except the hidden `.git` folder**, then copy in all the files from this zip.
4. In GitHub Desktop, write the summary `Add CMS + Cloudflare setup` → **Commit to main** → **Push origin**.

From now on, make code changes in this repo rather than in Emergent. If Emergent pushes old code to the same repo, it will overwrite this work.

---

## Step 2: Create the Sanity project (the editor)

1. Go to https://www.sanity.io → **Sign up**. Use an email the client can own long-term, or sign up yourself and add her later.
2. On https://www.sanity.io/manage → **Create new project** → name it `Timberline Custom Homes`.
   - Dataset: **production**, visibility **Public** (the website reads published content; editing still requires a login).
3. Copy the **Project ID** (8 characters, for example `a1b2c3d4`).
4. Open `studio/project.config.js` in Notepad and paste the ID:
   ```js
   export const projectId = 'a1b2c3d4'
   ```
5. In PowerShell, go into the repo's `studio` folder:
   ```powershell
   cd "C:\Users\<you>\Documents\GitHub\Timberline\studio"
   npm install
   npx sanity login
   npm run seed
   ```
   `npm run seed` copies all the current projects, photos, testimonials, FAQs, team members and banners into Sanity. You'll see dots while it uploads, then **✅ Done**.
6. Preview the editor on your computer:
   ```powershell
   npm run dev
   ```
   Open http://localhost:3333 and click around to check that everything is there. Press **Ctrl + C** in PowerShell to stop it.
7. Publish the editor online:
   ```powershell
   npx sanity deploy
   ```
   The editor is now at **https://timberline.sanity.studio**. If that name is taken, change `studioHost` in `studio/sanity.cli.js` (for example `timberline-homes`), then update the same address in `frontend/public/_redirects`.

---

## Step 3: Copy the photos off Emergent's servers

Many logos and photos are still hosted by Emergent. This step saves copies in the project, so the site keeps working if the Emergent account is closed.

```powershell
cd ..\frontend
node scripts/localize-images.js
```

Then in GitHub Desktop: commit `Host images locally` → **Push origin**.

---

## Step 4: Put the website on Cloudflare Pages

1. https://dash.cloudflare.com → sign up (free) → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git / Import an existing Git repository**.
2. Authorise GitHub and pick the **Timberline** repo.
3. Build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | Create React App |
   | Build command | `yarn build` |
   | Build output directory | `build` |
   | Root directory (advanced) | `frontend` |

4. **Environment variables** (same screen, or later under Settings → Variables and Secrets):

   | Name | Value |
   |---|---|
   | `NODE_VERSION` | `22` |
   | `SANITY_PROJECT_ID` | your project ID from Step 2 |
   | `SANITY_DATASET` | `production` |
   | `RESEND_API_KEY` | from https://resend.com/api-keys (click **Encrypt**) |
   | `RECIPIENT_EMAIL` | where enquiries go. Use **your own Resend sign-up email** until Step 7 is done, then `ray@timberlinecustomhomes.ca` |
   | `SENDER_EMAIL` | `onboarding@resend.dev` for now (change it in Step 7) |

5. **Save and Deploy.** After 2–3 minutes you get a free link like `timberline.pages.dev`.
6. **Test it:** every page, phone and desktop, a portfolio project, a before/after slider, and send one test message through the Contact form.

---

## Step 5: Make the site update automatically when the client publishes

1. Cloudflare → your Pages project → **Settings → Builds → Deploy hooks** → **Add deploy hook**: name `Sanity`, branch `main` → copy the URL.
2. https://www.sanity.io/manage → your project → **API → Webhooks → Create webhook**:
   - Name: `Rebuild website`
   - URL: paste the deploy hook
   - Dataset: `production`
   - Trigger on: **Create, Update, Delete**
   - HTTP method: **POST**
   - Leave everything else as default (drafts are not included, so only **published** changes rebuild the site).
3. Also paste the deploy hook into `studio/project.config.js`:
   ```js
   export const deployHookUrl = 'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/....'
   ```
   Then run `npx sanity deploy` again in the `studio` folder. This turns on the **🚀 Update Website** backup button in the editor.

**Test:** in the editor, change a project's location → **Publish** → wait about 3 minutes → refresh the site.

Cloudflare's free plan allows 500 builds a month, far more than this site needs.

---

## Step 6: Connect timberlinecustomhomes.ca

The domain is managed by **Nexicom** (registrar Tucows, DNS on `dns.dyn.com`), and **Ray's email runs on this domain**. Only the *website* records change. **Don't move the name servers and don't touch the MX (email) records.**

1. Cloudflare → Pages project → **Custom domains** → **Set up a custom domain** → enter `www.timberlinecustomhomes.ca`. Cloudflare shows a **CNAME target** (for example `timberline.pages.dev`).
2. Send Nexicom the email below, with Ray's permission or with Ray in CC.
3. Once Nexicom confirms, Cloudflare verifies the domain and issues a free SSL certificate (usually within an hour).

### Email to Nexicom

> **To:** hosting@nexicom.net
> **CC:** ray@timberlinecustomhomes.ca
> **Subject:** DNS change for timberlinecustomhomes.ca: new website (please keep email unchanged)
>
> Hi Paul,
>
> On behalf of Ray Northey (Timberline Custom Homes), we're launching the new website for **timberlinecustomhomes.ca**. Could you please make the following DNS changes?
>
> **1. Website:**
> - `www.timberlinecustomhomes.ca` → **CNAME** → `timberline.pages.dev` *(replace with the exact target Cloudflare shows)*
> - `timberlinecustomhomes.ca` (root/apex) → please set a **301 redirect to https://www.timberlinecustomhomes.ca**. If you can't redirect the root, please let us know and we'll provide an alternative.
>
> **2. Contact form email (Resend):** please add the TXT/MX records listed below for the `send` subdomain. *(Paste the records from Resend → Domains.)*
>
> **3. Please do NOT change** the MX records or any other email records. Ray's email must keep working exactly as it does now.
>
> Thank you,
> Raj Soni
> 249 688 1386

If Nexicom can't redirect the root domain, the alternative is to move the domain's DNS to Cloudflare (free). Cloudflare copies the existing records, including the email (MX) records, but every MX and TXT record must be checked before switching. Ask me before doing this.

---

## Step 7: Send contact-form emails from Timberline's own domain

1. https://resend.com → **Domains** → **Add domain** → `timberlinecustomhomes.ca` → copy the DNS records it shows into the Nexicom email (Step 6, point 2).
2. Once Resend shows **Verified**, update the Cloudflare variables:
   - `SENDER_EMAIL` = `website@timberlinecustomhomes.ca`
   - `RECIPIENT_EMAIL` = `ray@timberlinecustomhomes.ca` (to send to more than one address, separate them with commas)
3. Cloudflare → **Deployments** → **Retry deployment** so the change takes effect.

Until the domain is verified, Resend only delivers to the email you signed up to Resend with. That's why `RECIPIENT_EMAIL` starts as your own email.

---

## Step 8: Give the client access

1. https://www.sanity.io/manage → project → **Members → Invite** → `ray@timberlinecustomhomes.ca` (or whoever will edit), role **Editor**.
2. Send them `CLIENT-GUIDE.md` (it explains everything in plain language).
3. Their login link: **https://timberlinecustomhomes.ca/studio**

---

## Go-live checklist

- [ ] Every page checked on `*.pages.dev` (desktop and phone)
- [ ] Contact form test email received
- [ ] Editor change → Publish → visible on the site in about 3 minutes
- [ ] `www` and root domain both open the new site over **https**
- [ ] Ray confirms his email still works after the DNS change
- [ ] Domain auto-renew is on (it expires **May 15, 2027**)
- [ ] Emergent deployment stopped (no more credits used)

## Monthly cost

| Service | Plan | Cost |
|---|---|---|
| Cloudflare Pages | Free (commercial use allowed, 500 builds a month) | $0 |
| Sanity | Free | $0 |
| Resend | Free (about 3,000 emails a month) | $0 |
| Domain | Existing, renews yearly | Client's normal renewal |
