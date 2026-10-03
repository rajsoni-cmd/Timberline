import {UserIcon} from '../icons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: UserIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'teamMember'}),
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'title', title: 'Job title', type: 'string'}),
    defineField({name: 'since', title: 'With Timberline since (year)', type: 'string'}),
    defineField({
      name: 'group',
      title: 'Team',
      type: 'string',
      options: {
        list: [
          {title: 'Office team', value: 'office'},
          {title: 'Field team', value: 'field'},
        ],
        layout: 'radio',
      },
      initialValue: 'office',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'title', group: 'group'},
    prepare: ({title, subtitle, group}) => ({title, subtitle: `${group === 'field' ? 'Field' : 'Office'} · ${subtitle || ''}`}),
  },
})
