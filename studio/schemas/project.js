import {HomeIcon} from '../icons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineArrayMember, defineField, defineType} from 'sanity'

// The Renovations & Additions category shows Before / After sliders
// instead of a photo gallery.
const RENO_ID = 'category-renovations-additions'
const isReno = (document) => document?.category?._ref === RENO_ID

export default defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  icon: HomeIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'project'}),
    defineField({
      name: 'name',
      title: 'Project name',
      type: 'string',
      description: 'Example: Sunset Glory Boathouse',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      description: 'Click "Generate".',
      options: {source: 'name', maxLength: 80},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'portfolioCategory'}],
      options: {disableNew: true},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Example: Stoney Lake, ON',
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({
      name: 'cover',
      title: 'Cover photo',
      type: 'image',
      description: 'Shown on the project card and as the banner at the top of the project page.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Photo gallery',
      type: 'array',
      description: 'Drag & drop as many photos as you like, then drag to reorder.',
      of: [defineArrayMember({type: 'image'})],
      options: {layout: 'grid'},
      hidden: ({document}) => isReno(document),
    }),
    defineField({
      name: 'pairs',
      title: 'Before & After photos',
      type: 'array',
      description: 'Add one item per comparison (a "before" photo and an "after" photo of the same spot).',
      hidden: ({document}) => !isReno(document),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'beforeAfter',
          title: 'Before / After',
          fields: [
            defineField({name: 'before', title: 'BEFORE photo', type: 'image', validation: (r) => r.required()}),
            defineField({name: 'after', title: 'AFTER photo', type: 'image', validation: (r) => r.required()}),
            defineField({name: 'caption', title: 'Caption', type: 'string', description: 'Example: Kitchen — new cabinetry and lake view'}),
          ],
          preview: {select: {title: 'caption', media: 'after'}, prepare: ({title, media}) => ({title: title || 'Before / After', media})},
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'name', category: 'category.name', location: 'location', media: 'cover'},
    prepare: ({title, category, location, media}) => ({
      title,
      subtitle: [category, location].filter(Boolean).join(' · '),
      media,
    }),
  },
})
