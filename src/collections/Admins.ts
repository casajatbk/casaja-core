import type { CollectionConfig } from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
  admin: {
    useAsTitle: 'fullName',
    group: 'Auth',
  },
  auth: true,
  fields: [
    {
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      required: true,
      unique: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      unique: true,
    },

    {
      name: 'accountStatus',
      type: 'select',
      label: 'Account Status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Suspended', value: 'suspended' },
        { label: 'Deactivated', value: 'deactivated' },
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
