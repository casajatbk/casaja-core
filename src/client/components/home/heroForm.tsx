import Link from 'next/link'
import { Plug } from 'lucide-react'

interface HeroProps {
  heading?: string
  subheading?: string
  ctaPrimary?: string
  ctaSecondary?: string
}

export default function Hero({
  heading = 'Penyewaan Kabel Roll Berkualitas untuk Mahasiswa BINUS',
  subheading = 'Sewa kabel roll dengan berbagai pilihan kapasitas dan sesi yang fleksibel. Layanan cepat, aman, dan terpercaya.',
  ctaPrimary = 'Lihat Produk',
  ctaSecondary = 'Tentang Kami',
}: HeroProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-navy-900 leading-[1.1] tracking-tight mb-5">
              {heading}
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0D2740] text-white font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
              >
                {ctaPrimary}
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#0D2740] text-[#0D2740] hover:bg-[#0D2740]/10 font-semibold rounded-md transition-all duration-200 text-sm sm:text-base"
              >
                {ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right: Product card visual */}
          <div className="flex justify-center lg:justify-end animate-fade-up [animation-delay:200ms] opacity-0-init">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-full">
              
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-105">
                {/* background */}
                <img
                  src="https://kaj5bd5xtsvgxojs.public.blob.vercel-storage.com/hook-product.jpeg"
                  className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
                />

                {/* main image */}
                <img
                  src="https://kaj5bd5xtsvgxojs.public.blob.vercel-storage.com/hook-product.jpeg"
                  className="relative w-full h-full object-contain scale-90"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
