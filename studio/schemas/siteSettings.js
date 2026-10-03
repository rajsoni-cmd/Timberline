import {CogIcon} from '../icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Contact Details & Home Slider',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'contact', title: 'Contact details', default: true},
    {name: 'social', title: 'Social media'},
    {name: 'hero', title: 'Home page slider'},
  ],
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      group: 'contact',
      description: 'Shown in the top bar, footer, contact page and "Ask Ray" box. Example: (705) 654-4312',
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string',
      group: 'contact',
      validation: (r) => r.email(),
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address — line 1',
      type: 'string',
      group: 'contact',
      description: 'Leave both address lines empty to keep the address currently shown on the website. Example: 5584 Highway 28',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address — line 2',
      type: 'string',
      group: 'contact',
      description: 'Example: Woodview, ON K0L 3E0',
    }),
    defineField({name: 'facebook', title: 'Facebook link', type: 'url', group: 'social'}),
    defineField({name: 'instagram', title: 'Instagram link', type: 'url', group: 'social'}),
    defineField({name: 'linkedin', title: 'LinkedIn link', type: 'url', group: 'social'}),
    defineField({
      name: 'heroSlides',
      title: 'Home page slider photos',
      type: 'array',
      group: 'hero',
      description: 'Large photos that fade behind the home page headline. Drag to reorder. Use wide landscape photos (at least 2400px wide).',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              title: 'Short description of the photo',
              type: 'string',
              description: 'Helps Google and visually-impaired visitors. Example: "Timberframe cottage on Stoney Lake in autumn"',
            }),
          ],
        }),
      ],
      options: {layout: 'grid'},
    }),
  ],
  preview: {prepare: () => ({title: 'Contact Details & Home Slider'})},
})
