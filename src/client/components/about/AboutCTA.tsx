import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#dce8f0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2740]">Siap Memulai?</h2>
        <p className="text-sm sm:text-base text-[#0D2740]/70 max-w-md">
          Jelajahi katalog produk kami dan temukan kabel roll yang Anda butuhkan
        </p>
        <Link
          href="/products"
          className="mt-2 inline-block bg-[#0D2740] text-white text-sm sm:text-base font-semibold px-7 py-3 rounded-lg hover:bg-[#1565C0] transition-colors duration-200"
        >
          Lihat Katalog Produk
        </Link>
      </div>
    </section>
  )
}
