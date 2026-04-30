import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    group: 'Product',
  },
  fields: [
    {
      name: 'productImageId',
      type: 'relationship',
      label: 'Product Image',
      relationTo: 'product_images',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Product Name',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'stock',
      type: 'number',
      label: 'Total Stock',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'availableStock',
      type: 'number',
      label: 'Available Stock',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'pricePerSession',
      type: 'number',
      label: 'Price per Session (IDR)',
      required: true,
    },
    {
      name: 'condition',
      type: 'select',
      label: 'Condition',
      options: [
        { label: 'Good', value: 'good' },
        { label: 'Minor Damage', value: 'minor_damage' },
        { label: 'Damaged', value: 'damaged' },
      ],
      defaultValue: 'good',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
      defaultValue: 'active',
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
