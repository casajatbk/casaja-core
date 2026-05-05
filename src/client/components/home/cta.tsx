import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
          Siap Meminjam Kabel Roll?
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
          Pilih produk yang Anda butuhkan dan lakukan pemesanan hari ini. Kami siap melayani!
        </p>
        <Link
          href="/order"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-base"
        >
          Mulai Pesan Sekarang
        </Link>
      </div>
    </section>
  )
}
