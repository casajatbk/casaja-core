import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'id',
    group: 'Product',
  },
  fields: [
    {
      name: 'orderId',
      type: 'relationship',
      label: 'Order',
      relationTo: 'orders',
      required: true,
    },
    {
      name: 'productId',
      type: 'relationship',
      label: 'Product',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Rating (1-5)',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
      label: 'Comment',
    },
    {
      name: 'deletedAt',
      type: 'date',
      admin: {
        hidden: true,
      },
    },
  ],
}
