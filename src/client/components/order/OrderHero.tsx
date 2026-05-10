export default function OrderHero() {
  const steps = [
    { num: '1', label: 'Langkah pertama', title: 'Isi Data' },
    { num: '2', label: 'Langkah kedua', title: 'Pilih Produk' },
    { num: '3', label: 'Langkah ketiga', title: 'Pembayaran' },
  ]

  return (
    <div className="relative w-full bg-[#0D2740] overflow-hidden pb-16 pt-12 sm:pt-14 sm:pb-20">
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(21,101,192,0.45) 0%, transparent 70%)',
        }}
      />

      {/* Diagonal slice bawah */}
      <div className="absolute -bottom-0.5 left-0 right-0 h-12 bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />

      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/13 text-[#93c5fd] text-[11px] font-semibold tracking-[0.11em] uppercase px-3 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse shrink-0" />
          Form Pemesanan
        </div>

        {/* Accent line */}
        <span className="block w-12 h-0.75 rounded-full bg-linear-to-r from-[#60a5fa] to-[#1565C0] mb-5" />

        {/* Heading */}
        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-[1.12] mb-3">
          Formulir <span className="text-[#60a5fa] italic">Pemesanan</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(0.875rem,2vw,1rem)] text-white/55 leading-relaxed max-w-115 mb-8">
          Lengkapi data diri dan pilih sesi peminjaman, lalu lakukan pembayaran untuk mengkonfirmasi
          pesananmu.
        </p>

        {/* Steps */}
        <div className="flex flex-wrap items-stretch gap-y-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex items-center gap-2.5 ${
                i !== steps.length - 1 ? 'pr-6 mr-6 border-r border-white/12' : ''
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-[#60a5fa]/15 border border-[#60a5fa]/35 flex items-center justify-center text-[12px] font-bold text-[#93c5fd] shrink-0">
                {step.num}
              </div>
              <div>
                <p className="text-[11px] text-white/40 leading-none mb-1">{step.label}</p>
                <p className="text-[13px] font-semibold text-white/85 leading-none">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
