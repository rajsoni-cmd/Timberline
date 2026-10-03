import {FolderIcon} from '../icons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioCategory',
  title: 'Portfolio Category',
  type: 'document',
  icon: FolderIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'portfolioCategory'}),
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      description: 'Example: Boathouses',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      description: 'Click "Generate". This becomes the page link, e.g. /portfolio/boathouses',
      options: {source: 'name', maxLength: 60},
      readOnly: ({document}) => document?._id?.replace(/^drafts\./, '') === 'category-renovations-additions',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Small text above the name',
      type: 'string',
      description: 'Example: Dockside craftsmanship',
    }),
    defineField({name: 'description', title: 'Short description', type: 'text', rows: 3}),
    defineField({
      name: 'cover',
      title: 'Cover photo',
      type: 'image',
      description: 'Shown on the category card and as the category page banner.',
      validation: (r) => r.required(),
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'tagline', media: 'cover'}},
})
