import type { CollectionConfig } from 'payload'

export const ProductImages: CollectionConfig = {
  slug: 'product_images',
  labels: {
    singular: 'Product Image',
    plural: 'Product Images',
  },
  admin: {
    useAsTitle: 'id',
    group: 'Product',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
    },
  ],
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    formatOptions: {
      format: 'webp',
      options: {
        quality: 75,
      },
    },
  },
}
