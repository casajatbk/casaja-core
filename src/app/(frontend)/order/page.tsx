import OrderForm from '@/client/components/order/OrderForm'
import OrderSummary from '@/client/components/order/OrderSummary'
import OrderHero from '@/client/components/order/OrderHero'

export default function OrderPage() {
  return (
    <>
      {/* HEADER */}
      <OrderHero />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
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
