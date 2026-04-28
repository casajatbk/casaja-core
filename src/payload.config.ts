import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ProductImages } from './collections/ProductImages'
import { Admins } from './collections/Admins'
import { Products } from './collections/Products'
import { Orders } from './collections/Orders'
import { OrderItems } from './collections/OrderItems'
import { Payments } from './collections/Payments'
import { Locations } from './collections/Locations'
import { Reviews } from './collections/Reviews'
import { TermsAndConditions } from './collections/TermsAndConditions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    // Product
    Products,
    ProductImages,
    Reviews,
    // Transaction
    Orders,
    OrderItems,
    Payments,
    // Location
    Locations,
    // Content
    TermsAndConditions,
    // Media
    Media,
    // Auth
    Users,
    Admins,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
