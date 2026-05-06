import { Zap, Clock, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Cepat & Mudah',
    description:
      'Proses pemesanan cepat dan sederhana hanya dalam beberapa klik.',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Sesi Fleksibel',
    description:
      'Pilih dari 6 sesi peminjaman yang sesuai dengan jadwal kuliah Anda.',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'Terpercaya',
    description:
      'Kabel berkualitas dengan jaminan kondisi terbaik untuk setiap peminjaman.',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
  },
]

export default function Features() {
  return (
    <section className="bg-[#F3F4F5] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bordered container matching the screenshot */}
        {/* <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 sm:p-10"> */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center mb-8 sm:mb-10">
            Mengapa pilih CASAJA?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className={`w-10 h-10 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={20} className={feature.iconColor} />
                  </div>
                  <h3 className="font-bold text-navy-900 text-base mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        {/* </div> */}

      </div>
    </section>
  )
}
