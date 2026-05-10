'use client'

import { useEffect } from 'react'
import { getDeviceId } from '@/client/utils/device'

export default function DeviceInit() {
  useEffect(() => {
    getDeviceId()
  }, [])

  return null
}
