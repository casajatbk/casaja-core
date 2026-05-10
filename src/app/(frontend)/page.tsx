import Hero from '@/client/components/home/heroForm'
import Features from '@/client/components/home/features'
import CTA from '@/client/components/home/cta'

import Reveal from '@/client/utils/Reveal'

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <Features />
      </Reveal>

      <Reveal>
        <CTA />
      </Reveal>
    </>
  )
}
