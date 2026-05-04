'use client'

import { useFormContext } from 'react-hook-form'
import { type OrderFormData } from '@/client/validations/order.schema'

const PAYMENT_OPTIONS = ['Cash', 'QRIS', 'Transfer Bank']

export default function PaymentMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderFormData>()

  return (
    <div>
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Metode Pembayaran</h2>

      <div className="space-y-2 sm:space-y-3">
        {PAYMENT_OPTIONS.map((method, i) => (
          <label
            key={i}
            className="flex items-center gap-3 border rounded-xl p-3 sm:p-4 cursor-pointer hover:border-slate-400 transition-colors"
          >
            <input
              type="radio"
              value={method}
              {...register('payment')}
              defaultChecked={i === 0}
              className="w-4 h-4 accent-slate-800"
            />
            <span className="text-sm sm:text-base">{method}</span>
          </label>
        ))}
      </div>

      {errors.payment && <p className="mt-2 text-xs text-red-500">{errors.payment.message}</p>}
    </div>
  )
}
