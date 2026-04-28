import type { CollectionConfig } from 'payload'

export const OrderItems: CollectionConfig = {
  slug: 'order-items',
  admin: {
    useAsTitle: 'id',
    group: 'Transaction',
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
      name: 'quantity',
      type: 'number',
      label: 'Quantity',
      required: true,
      defaultValue: 1,
    },
    {
      name: 'pricePerSession',
      type: 'number',
      label: 'Price per Session',
      required: true,
    },
    {
      name: 'subtotalPrice',
      type: 'number',
      label: 'Subtotal Price',
      required: true,
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
