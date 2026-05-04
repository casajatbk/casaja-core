export default function OrderSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 h-fit md:sticky md:top-4">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Ringkasan Keranjang</h2>

      {/* Item */}
      <div className="space-y-2 sm:space-y-3">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-medium text-sm sm:text-base">Kabel Roll 5 Lubang</p>
            <p className="text-xs sm:text-sm text-slate-500">07.00 - 08.40</p>
            <p className="text-xs sm:text-sm text-slate-500">Qty: 1</p>
          </div>
          <button className="text-red-500 text-xs sm:text-sm shrink-0">Hapus</button>
        </div>

        <p className="text-right font-medium text-blue-600 text-sm sm:text-base">Rp 30.000</p>
      </div>

      <hr className="my-3 sm:my-4" />

      {/* Summary */}
      <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp 30.000</span>
        </div>
        <div className="flex justify-between">
          <span>Admin</span>
          <span>Rp 0</span>
        </div>
      </div>

      <div className="flex justify-between mt-3 sm:mt-4 text-base sm:text-lg font-semibold">
        <span>Total</span>
        <span className="text-blue-600">Rp 30.000</span>
      </div>

      <button className="mt-3 sm:mt-4 text-xs sm:text-sm underline">Tambah Produk Lain</button>
    </div>
  )
}
