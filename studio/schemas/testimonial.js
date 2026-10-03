import {CommentIcon} from '../icons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: CommentIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'testimonial'}),
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 8, validation: (r) => r.required()}),
    defineField({name: 'author', title: 'Client name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'location',
      title: 'Location / year',
      type: 'string',
      description: 'Example: Stoney Lake, 2026',
    }),
    defineField({
      name: 'image',
      title: 'Project photo (optional)',
      type: 'image',
    }),
    defineField({
      name: 'showOnHome',
      title: 'Feature on the Home and About pages',
      type: 'boolean',
      description: 'Turn on for the 2–3 testimonials you want featured. All testimonials always appear on the Testimonials page.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'author', subtitle: 'location', media: 'image', featured: 'showOnHome'},
    prepare: ({title, subtitle, media, featured}) => ({
      title: featured ? `★ ${title}` : title,
      subtitle,
      media,
    }),
  },
})
