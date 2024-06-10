import {defineField} from 'sanity'

export const heroType = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'link',
      type: 'linkInternal',
    }),
    defineField({
      name: 'media',
      title: 'Image or Video',
      type: 'array',
      of: [
        {type: 'image', title: 'Image'},
        {type: 'file', title: 'Video', options: {accept: 'video/*'}},
      ],
      validation: (Rule) => Rule.max(1),
    }),
  ],
})
