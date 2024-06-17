import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {GROUPS} from '../../constants'

const TITLE = 'Home'

export const homeType = defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'hero',
      type: 'hero',
      group: 'editorial',
    }),
    defineField({
      name: 'categories',
      title: 'Shop by Category',
      type: 'array',
      of: [{type: 'category'}],
      group: 'editorial',
      validation: (Rule) => Rule.min(5).error('You must select at least 5 categories.'),
    }),
    defineField({
      name: 'featuredCollection1',
      title: 'Featured Collection 1',
      type: 'featured',
      group: 'editorial',
    }),
    defineField({
      name: 'collections',
      title: 'Shop by Collections',
      type: 'array',
      of: [{type: 'featured'}],
      group: 'editorial',
      validation: (Rule) => Rule.min(6).max(6).error('You must select exactly 6 collections.'),
    }),
    defineField({
      name: 'featuredCollection2',
      title: 'Featured Collection 2',
      type: 'featured',
      group: 'editorial',
    }),
    // defineField({
    //   name: 'seo',
    //   title: 'SEO',
    //   type: 'seo',
    //   group: 'seo',
    // }),
  ],
  preview: {
    prepare() {
      return {
        media: HomeIcon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
