import {defineArrayMember, defineField} from 'sanity'

export const shopifyProductType = defineField({
  name: 'shopifyProduct',
  title: 'Shopify',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  readOnly: true,
  fieldsets: [
    {
      name: 'status',
      title: 'Status',
    },
    {
      name: 'organization',
      title: 'Organization',
      options: {
        columns: 2,
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      options: {
        collapsed: true,
        collapsible: true,
      },
    },
  ],
  fields: [
    defineField({
      fieldset: 'status',
      name: 'createdAt',
      type: 'string',
    }),
    defineField({
      fieldset: 'status',
      name: 'updatedAt',
      type: 'string',
    }),
    defineField({
      fieldset: 'status',
      name: 'status',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: ['active', 'archived', 'draft'],
      },
    }),
    defineField({
      fieldset: 'status',
      name: 'isDeleted',
      title: 'Deleted from Shopify?',
      type: 'boolean',
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'Title displayed in both cart and checkout',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Shopify Product ID',
    }),
    defineField({
      name: 'gid',
      title: 'GID',
      type: 'string',
      description: 'Shopify Product GID',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'Shopify Product handle',
    }),
    defineField({
      name: 'descriptionHtml',
      title: 'HTML Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      fieldset: 'organization',
      name: 'productType',
      type: 'string',
    }),
    defineField({
      fieldset: 'organization',
      name: 'vendor',
      type: 'string',
    }),
    defineField({
      fieldset: 'organization',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'priceRange',
      type: 'priceRange',
    }),
    defineField({
      name: 'previewImageUrl',
      title: 'Preview Image URL',
      type: 'string',
      description: 'Image displayed in both cart and checkout',
    }),
    defineField({
      name: 'options',
      type: 'array',
      of: [{type: 'option'}],
    }),
    defineField({
      fieldset: 'variants',
      name: 'variants',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Variant',
          type: 'object',
          fields: [
            {name: 'id', type: 'string', title: 'ID'},
            {name: 'compareAtPrice', type: 'number', title: 'Compare at Price'},
            {name: 'inStock', type: 'boolean', title: 'In Stock'},
            {name: 'inventoryManagement', type: 'string', title: 'Inventory Management'},
            {name: 'inventoryPolicy', type: 'string', title: 'Inventory Policy'},
            {name: 'option1', type: 'string', title: 'Option 1'},
            {name: 'option2', type: 'string', title: 'Option 2'},
            {name: 'option3', type: 'string', title: 'Option 3'},
            {name: 'price', type: 'number', title: 'Price'},
            {name: 'sku', type: 'string', title: 'SKU'},
            {name: 'title', type: 'string', title: 'Title'},
          ],
        }),
      ],
    }),
  ],
})
