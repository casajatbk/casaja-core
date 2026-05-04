'use client'

import { useEffect, useState } from 'react'
import { useForm, FormProvider, type Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { orderSchema, type OrderFormData } from '@/client/validations/order.schema'
import PaymentMethod from './PaymentMethod'
import { useOrderStorage } from '@/client/hooks/order/useOrderStorage'
import { useRouter } from 'next/navigation'
import { ORDER_STORAGE_KEY } from '@/shared/constants/storage'

export default function OrderForm() {
  const router = useRouter()

  const [hasStorage, setHasStorage] = useState(false)
  const [isAutoFilled, setIsAutoFilled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(ORDER_STORAGE_KEY)
    setHasStorage(!!stored)
  }, [])

  const defaultValues: OrderFormData = {
    room: '',
    name: '',
    nim: '',
    phone: '',
    email: '',
    payment: 'Cash',
  }

  const methods = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema as any) as Resolver<OrderFormData>,
    defaultValues,
  })

  const handleAutoFill = () => {
    if (isAutoFilled) {
      methods.reset(defaultValues)
      setIsAutoFilled(false)
    } else {
      // Isi dari localStorage
      loadFromStorage()
      setIsAutoFilled(true)
    }
  }

  useEffect(() => {
    const subscription = methods.watch((_, { type }) => {
      if (type === 'change') {
        setIsAutoFilled(false)
      }
    })
    return () => subscription.unsubscribe()
  }, [methods])

  const { loadFromStorage, saveToStorage } = useOrderStorage(methods)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = methods

  const onSubmit = async (data: OrderFormData) => {
    saveToStorage(data)
    setHasStorage(true)
    console.log('Data tersimpan:', data)

    router.push('/success')
  }

  return (
    <FormProvider {...methods}>
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-800">Detail Pemesan</h2>

          <button
            type="button"
            onClick={handleAutoFill}
            disabled={!hasStorage}
            className={`
      inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium
      transition-all duration-200
      ${
        !hasStorage
          ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
          : isAutoFilled
            ? 'bg-red-50 text-red-500 hover:bg-red-100 active:scale-95'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 active:scale-95'
      }
    `}
          >
            {isAutoFilled ? (
              // Ikon X untuk urungkan
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                Urungkan
              </>
            ) : (
              // Ikon petir untuk isi otomatis
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Isi Otomatis
              </>
            )}
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Ruangan */}
          <div>
            <label className="text-xs sm:text-sm font-medium">Ruangan</label>
            <input
              {...register('room')}
              maxLength={3}
              className={`w-full mt-1 border rounded-lg px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 ${
                errors.room ? 'border-red-400 focus:ring-red-200' : 'focus:ring-slate-300'
              }`}
              placeholder="Contoh: 001, 002, dll"
            />
            {errors.room && <p className="mt-1 text-xs text-red-500">{errors.room?.message}</p>}
          </div>

          {/* Nama Lengkap */}
          <div>
            <label className="text-xs sm:text-sm font-medium">Nama Lengkap</label>
            <input
              {...register('name')}
              className={`w-full mt-1 border rounded-lg px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-400 focus:ring-red-200' : 'focus:ring-slate-300'
              }`}
              placeholder="Nama Anda"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name?.message}</p>}
          </div>

          {/* NIM */}
          <div>
            <label className="text-xs sm:text-sm font-medium">NIM</label>
            <input
              {...register('nim')}
              inputMode="numeric"
              className={`w-full mt-1 border rounded-lg px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 ${
                errors.nim ? 'border-red-400 focus:ring-red-200' : 'focus:ring-slate-300'
              }`}
              placeholder="Nomor Induk Mahasiswa"
            />
            {errors.nim && <p className="mt-1 text-xs text-red-500">{errors.nim?.message}</p>}
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="text-xs sm:text-sm font-medium">Nomor Telepon</label>
            <input
              {...register('phone')}
              className={`w-full mt-1 border rounded-lg px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 ${
                errors.phone ? 'border-red-400 focus:ring-red-200' : 'focus:ring-slate-300'
              }`}
              placeholder="08xx-xxxx-xxxx"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone?.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-xs sm:text-sm font-medium">Email</label>
            <input
              {...register('email')}
              className={`w-full mt-1 border rounded-lg px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-400 focus:ring-red-200' : 'focus:ring-slate-300'
              }`}
              placeholder="email@example.com"
              type="email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email?.message}</p>}
          </div>
        </div>

        {/* Payment — pakai FormProvider agar bisa akses register di dalam */}
        <PaymentMethod />

        {/* Submit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {' '}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-800 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-slate-700 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Memproses...' : 'Lakukan Pemesanan'}
          </button>
        </form>
      </div>
    </FormProvider>
  )
}
