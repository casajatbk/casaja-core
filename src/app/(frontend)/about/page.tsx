import AboutHero from '@/client/components/about/AboutHero'
import AboutBackground from '@/client/components/about/AboutBackground'
import AboutFounders from '@/client/components/about/AboutFounders'
import AboutInfo from '@/client/components/about/AboutInfo'
import AboutCTA from '@/client/components/about/AboutCTA'

import Reveal from '@/client/utils/Reveal'

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero / Page Title */}
      <AboutHero />

      {/* Latar Belakang Usaha */}
      <Reveal>
        <AboutBackground />
      </Reveal>

      {/* Divider */}
      <Reveal>
        <div className="w-full border-t border-[#0D2740]/10" />
      </Reveal>

      {/* Pendiri CASAJA */}
      <Reveal>
        <AboutFounders />
      </Reveal>

      {/* Divider */}
      <div className="w-full border-t border-[#0D2740]/10" />

      {/* Jam Operasional & Lokasi */}
      <Reveal>
        <AboutInfo />
      </Reveal>

      {/* CTA */}
      <Reveal>
        <AboutCTA />
      </Reveal>
    </main>
  )
}
