import type { CollectionConfig } from 'payload'

export const Payments: CollectionConfig = {
  slug: 'payments',
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
      name: 'paymentMethod',
      type: 'select',
      label: 'Payment Method',
      options: [
        { label: 'Midtrans', value: 'midtrans' },
        { label: 'Cash', value: 'cash' },
        { label: 'Manual Transfer', value: 'manual_transfer' },
      ],
      required: true,
    },
    {
      name: 'paymentStatus',
      type: 'select',
      label: 'Payment Status',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Success', value: 'success' },
        { label: 'Failed', value: 'failed' },
        { label: 'Expired', value: 'expired' },
        { label: 'Refunded', value: 'refunded' },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'transactionId',
      type: 'text',
      label: 'Transaction ID',
    },
    {
      name: 'amount',
      type: 'number',
      label: 'Amount',
      required: true,
    },
    {
      name: 'paidAt',
      type: 'date',
      label: 'Paid At',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
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
