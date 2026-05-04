import { z } from 'zod'

export const orderSchema = z.object({
  room: z.string().trim().length(3, 'Ruangan harus 3 karakter (contoh: 001)'),

  name: z
    .string()
    .trim()
    .min(3, 'Nama minimal 3 karakter')
    .max(100, 'Nama terlalu panjang')
    .regex(/^[a-zA-Z\s]+$/, 'Nama hanya boleh huruf'),

  nim: z
    .string()
    .trim()
    .min(10, 'NIM minimal 10 digit')
    .max(12, 'NIM maksimal 12 digit')
    .regex(/^\d+$/, 'NIM harus berupa angka'),

  phone: z
    .string()
    .trim()
    .regex(/^08\d{8,11}$/, 'Nomor harus diawali 08 dan 10–13 digit'),

  email: z
    .string()
    .trim()
    .email('Format email tidak valid')
    .refine((val) => val.toLowerCase().endsWith('@binus.ac.id'), {
      message: 'Gunakan email BINUS (@binus.ac.id)',
    }),

  payment: z.enum(['Cash', 'QRIS', 'Transfer Bank']).refine((val) => !!val, {
    message: 'Pilih metode pembayaran',
  }),
})

export type OrderFormData = z.infer<typeof orderSchema>
