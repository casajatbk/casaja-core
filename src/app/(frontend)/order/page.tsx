import OrderForm from '@/client/components/order/OrderForm'
import OrderSummary from '@/client/components/order/OrderSummary'

export default function OrderPage() {
  return (
    <>
      {/* HEADER */}
      <div className="w-full bg-[#f3f4f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0D2740]">Pemesanan</h1>
            <p className="text-sm sm:text-base text-[#0D2740]/70">
              Lengkapi data dan lakukan pembayaran
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* LEFT - Form */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 order-2 md:order-1">
            <OrderForm />
          </div>

          {/* RIGHT - Summary */}
          <div className="col-span-1 order-1 md:order-2">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  )
}
