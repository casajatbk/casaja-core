import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

import Navbar from '@/client/components/navbar'
import Footer from '@/client/components/footer'
import DeviceInit from '@/client/components/DeviceInit'

type LayoutProps = {
  children: ReactNode
}

const logoUrl = 'https://kaj5bd5xtsvgxojs.public.blob.vercel-storage.com/logo-casaja.jpeg'

export const metadata: Metadata = {
  title: 'CASAJA - Cable Rental Service for BINUS Students',
  description: 'Layanan penyewaan kabel roll untuk mahasiswa BINUS',

  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },

  openGraph: {
    title: 'CASAJA',
    description: 'Layanan penyewaan kabel roll untuk mahasiswa BINUS',
    images: [logoUrl],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CASAJA',
    description: 'Layanan penyewaan kabel roll untuk mahasiswa BINUS',
    images: [logoUrl],
  },
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="id">
      <body>
        <DeviceInit />

        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  )
}

export default Layout
