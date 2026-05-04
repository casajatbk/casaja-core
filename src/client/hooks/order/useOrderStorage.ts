import { ORDER_STORAGE_KEY } from '@/shared/constants/storage'
import { UseFormReturn } from 'react-hook-form'
import { OrderFormData } from '@/client/validations/order.schema'

export function useOrderStorage(methods: UseFormReturn<OrderFormData>) {
  const loadFromStorage = () => {
    if (typeof window === 'undefined') return

    const stored = localStorage.getItem(ORDER_STORAGE_KEY)

    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        methods.reset(parsed)
      } catch (err) {
        console.error('Gagal parse localStorage', err)
      }
    }
  }

  const saveToStorage = (data: OrderFormData) => {
    try {
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(data))
    } catch (err) {
      console.error('Gagal simpan localStorage', err)
    }
  }

  return {
    loadFromStorage,
    saveToStorage,
  }
}
