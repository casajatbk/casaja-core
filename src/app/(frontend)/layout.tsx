import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

import Navbar from '@/client/components/navbar'
import Footer from '@/client/components/footer'
import DeviceInit from '@/client/components/DeviceInit'

import { LOGO_URL } from '@/shared/constants/storage'

type LayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'CASAJA - Cable Rental Service for BINUS Students',
  description: 'Layanan penyewaan kabel roll untuk mahasiswa BINUS',

  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },

  openGraph: {
    title: 'CASAJA',
    description: 'Layanan penyewaan kabel roll untuk mahasiswa BINUS',
    images: [LOGO_URL],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CASAJA',
    description: 'Layanan penyewaan kabel roll untuk mahasiswa BINUS',
    images: [LOGO_URL],
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
