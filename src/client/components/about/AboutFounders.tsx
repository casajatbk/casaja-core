import { UserCircle } from 'lucide-react'

const founders = [
  { name: 'DANIEL YEHUDA', id: '2902598145' },
  { name: 'EXCEL VALENTINO', id: '2902593996' },
  { name: 'MIKAEL JATI HARSONO', id: '2902610131' },
  { name: 'CARLOS JOSHUA SUNARTO', id: '2902599293' },
  { name: 'M SAMUDERA NUR FAOZUN', id: '2902604293' },
]

function FounderCard({ name, id }: { name: string; id: string }) {
  return (
    <div className="flex items-center gap-3 border border-[#0D2740]/15 rounded-lg px-4 py-3 bg-white shadow-sm">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#e8eaed] flex items-center justify-center shrink-0">
        <UserCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#0D2740]/40" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-bold text-[#0D2740] leading-tight">{name}</span>
        <span className="text-xs text-[#0D2740]/55">{id}</span>
      </div>
    </div>
  )
}

export default function AboutFounders() {
  const topRow = founders.slice(0, 3)
  const bottomRow = founders.slice(3)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2740] text-center mb-8 sm:mb-10">
        Pendiri CASAJA
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {founders.map((founder, index) => (
          <div
            key={founder.id}
            className={`
        ${
          index === founders.length - 1
            ? 'sm:col-span-2 lg:col-span-1 sm:flex sm:justify-center lg:block'
            : ''
        }
      `}
          >
            <div
              className={`
          ${index === founders.length - 1 ? 'sm:w-[48%] lg:w-full' : 'w-full'}
        `}
            >
              <FounderCard name={founder.name} id={founder.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
