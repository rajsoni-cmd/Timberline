import {HelpCircleIcon} from '../icons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'faq'}),
    defineField({name: 'question', title: 'Question', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 8,
      description: 'Leave an empty line between paragraphs.',
      validation: (r) => r.required(),
    }),
  ],
  preview: {select: {title: 'question'}},
})
