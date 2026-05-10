export default function AboutBackground() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Company Logo Placeholder */}
        <div className="w-full md:w-5/12 shrink-0">
          <div className="w-full aspect-4/3 rounded-xl overflow-hidden">
            <img
              src="https://kaj5bd5xtsvgxojs.public.blob.vercel-storage.com/logo-casaja.jpeg"
              alt="Logo CASAJA"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2740]">Latar Belakang Usaha</h2>
          <p className="text-sm sm:text-base text-[#0D2740]/75 leading-relaxed">
            CASAJA adalah layanan penyewaan kabel roll yang dirancang khusus untuk memenuhi
            kebutuhan mahasiswa BINUS. Kami memahami bahwa kebutuhan akan perangkat elektronik
            sering berubah-ubah, terutama bagi mahasiswa yang aktif di berbagai kegiatan akademik
            dan ekstrakurikuler.
          </p>
          <p className="text-sm sm:text-base text-[#0D2740]/75 leading-relaxed">
            Dengan menyediakan kabel roll berkualitas tinggi dengan berbagai pilihan kapasitas dan
            sesi peminjaman yang fleksibel, kami membantu mahasiswa BINUS mendapatkan solusi praktis
            dan terjangkau.
          </p>
        </div>
      </div>
    </section>
  )
}
