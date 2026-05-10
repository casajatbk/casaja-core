import { ReactNode } from 'react'

import './globals.css'
import Navbar from '@/client/components/navbar'
import Footer from '@/client/components/footer'
import DeviceInit from '@/client/components/DeviceInit'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
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
