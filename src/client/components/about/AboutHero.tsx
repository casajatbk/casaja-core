'use client'

import { useEffect, useState } from 'react'

export default function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true)))
  }, [])

  const stats = [
    { number: '5', label: 'Pendiri' },
    { number: '6 Hari', label: 'Operasional' },
    { number: '100%', label: 'Untuk Mahasiswa' },
  ]

  return (
    <div className="relative w-full bg-[#0D2740] overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-24">
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Orb kanan atas */}
      <div
        className="absolute -top-20 -right-20 w-105 h-105 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(21,101,192,0.5) 0%, transparent 70%)' }}
      />

      {/* Orb kiri bawah */}
      <div
        className="absolute bottom-5 -left-16 w-70 h-70 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)' }}
      />

      {/* Diagonal slice bawah */}
      <div className="absolute -bottom-0.5 left-0 right-0 h-14 bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />

      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-150">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.14] text-[#93c5fd] text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mb-5
              transition-all duration-500 delay-100
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse shrink-0" />
            Layanan Mahasiswa BINUS
          </div>

          {/* Accent line */}
          <span
            className={`block h-0.75 rounded-full bg-linear-to-r from-[#60a5fa] to-[#1565C0] mb-5
              transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] delay-50
              ${mounted ? 'w-14' : 'w-0'}`}
          />

          {/* Heading */}
          <h1
            className={`font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white leading-[1.12] mb-4
              transition-all duration-650 delay-250
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Tentang <span className="text-[#60a5fa] italic">CASAJA</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-[clamp(0.9rem,2vw,1.05rem)] text-white/[0.58] leading-relaxed max-w-115 mb-9
              transition-all duration-650 delay-400
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Kami berkomitmen melayani kebutuhan mahasiswa BINUS dengan solusi penyewaan kabel roll
            yang praktis, terpercaya, dan terjangkau.
          </p>

          {/* Stats */}
          <div
            className={`flex items-center flex-wrap gap-y-3
              transition-all duration-650 delay-550
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-[1.45rem] font-extrabold text-white leading-none">
                    {stat.number}
                  </span>
                  <span className="text-[0.7rem] text-white/40 tracking-[0.07em] uppercase">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && <div className="w-px h-8 bg-white/[0.14] mx-7 shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
