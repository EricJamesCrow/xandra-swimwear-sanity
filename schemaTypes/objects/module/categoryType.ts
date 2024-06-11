import {defineField} from 'sanity'

export const categoryType = defineField({
  name: 'category',
  title: 'Category',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'text',
      rows: 1,
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      type: 'linkInternal',
    }),
  ],
})
