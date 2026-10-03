import {ImagesIcon} from '../icons'
import {defineField, defineType} from 'sanity'

// One banner (the big photo + title at the top of each page) per page.
const PAGES = [
  ['about', 'About / Our History page'],
  ['process', 'Our Process page'],
  ['whatWeOffer', 'What We Offer page'],
  ['portfolio', 'Portfolio page'],
  ['testimonials', 'Testimonials page'],
  ['contact', 'Contact page'],
  ['heavyEquipment', 'Heavy Equipment page'],
  ['realEstate', 'Real Estate page'],
]

export default defineType({
  name: 'pageBanners',
  title: 'Page Banners',
  type: 'document',
  icon: ImagesIcon,
  groups: PAGES.map(([name, title], i) => ({name, title: title.replace(' page', ''), default: i === 0})),
  fields: PAGES.map(([name, title]) =>
    defineField({
      name,
      title,
      type: 'pageBanner',
      group: name,
      description: 'The large photo and heading at the top of this page. Leave a field empty to keep the current text.',
    }),
  ),
  preview: {prepare: () => ({title: 'Page Banners'})},
})

export const pageBanner = defineType({
  name: 'pageBanner',
  title: 'Page banner',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Small text above the title', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2}),
    defineField({name: 'image', title: 'Background photo', type: 'image'}),
  ],
})
