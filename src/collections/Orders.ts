import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderCode',
    group: 'Transaction',
  },
  fields: [
    {
      name: 'orderCode',
      type: 'text',
      label: 'Order Code',
      required: true,
      unique: true,
    },
    {
      name: 'orderStatus',
      type: 'select',
      label: 'Order Status',
      options: [
        { label: 'Pending Payment', value: 'pending_payment' },
        { label: 'Paid', value: 'paid' },
        { label: 'Approved', value: 'approved' },
        { label: 'Ongoing', value: 'ongoing' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Rejected', value: 'rejected' },
      ],
      defaultValue: 'pending_payment',
    },
    // Customer Information at Transaction
    {
      name: 'customerName',
      type: 'text',
      label: 'Full Name',
    },
    {
      name: 'customerNim',
      type: 'text',
      label: 'NIM',
    },
    {
      name: 'customerPhone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'customerEmail',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'customerRoom',
      type: 'text',
      label: 'Room',
    },
    {
      name: 'fulfillmentMethod',
      type: 'select',
      label: 'Fulfillment Method',
      options: [
        { label: 'Pickup', value: 'pickup' },
        { label: 'Delivery', value: 'delivery' },
      ],
    },
    {
      name: 'deliveryRoom',
      type: 'text',
      label: 'Delivery Room',
    },
    {
      name: 'deliveryNotes',
      type: 'textarea',
      label: 'Delivery Notes',
    },
    {
      name: 'rentalStart',
      type: 'date',
      label: 'Rental Start',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'rentalEnd',
      type: 'date',
      label: 'Rental End',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'actualReturnDate',
      type: 'date',
      label: 'Actual Return Date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'sessionCount',
      type: 'number',
      label: 'Session Count',
      required: true,
      defaultValue: 1,
    },
    {
      name: 'subtotalPrice',
      type: 'number',
      label: 'Subtotal Price',
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
    },
    {
      name: 'approvedBy',
      type: 'relationship',
      label: 'Approved By',
      relationTo: 'admins',
    },
    {
      name: 'approvedAt',
      type: 'date',
      label: 'Approved At',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
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
