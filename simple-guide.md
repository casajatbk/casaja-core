# 📁 Struktur Folder Project

## Gambaran Besar Project

Bayangkan project ini seperti sebuah **perusahaan digital**. Di dalamnya ada:

- 🖥️ Tampilan untuk pelanggan (frontend)
- ⚙️ Sistem pengolahan di belakang layar (backend)
- 🗄️ Database (tempat penyimpanan data)
- 📜 Aturan & standar yang dipakai bersama

### Tujuan Struktur Folder

- Kerja tim tidak saling tabrak
- Kode rapi dan mudah dicari
- Project bisa besar tanpa jadi berantakan

---

## 1. `src/app/(frontend)`

> **Ini adalah:** Halaman yang dilihat langsung oleh user

🏪 **Analogi:** "Toko yang dilihat pelanggan"

Di sinilah semua tampilan website dibangun:

- Halaman Home
- Halaman Produk
- Halaman About
- Layout (header, footer, dll)

### Isi folder ini:

- File halaman (`page.tsx`)
- Layout global (`layout.tsx`)
- Routing (navigasi antar halaman)

### Contoh kerja nyata:

- Menampilkan daftar produk ke user
- Menampilkan hero section
- Menyusun komponen jadi 1 halaman utuh

### ❌ Yang tidak boleh dilakukan:

- Jangan taruh logic berat (misalnya hitung harga kompleks)
- Jangan akses database langsung

> **Fokus folder ini:** "Gimana tampilannya?" bukan "Gimana cara kerjanya?"

---

## 2. `collection`

> **Ini adalah:** Struktur database (Payload CMS)

📦 **Analogi:** "Gudang data + daftar isi barang"

### Di sini kamu mendefinisikan:

- Data apa saja yang ada
- Bentuk data tersebut
- Aturan data

### Contoh:

- Collection Products
- Collection Users
- Collection Orders

### Isi:

- Nama field (title, price, image)
- Tipe data (string, number, dll)
- Validasi (wajib isi atau tidak)

---

## 3. `client`

> **Ini adalah:** Semua yang berjalan di browser user

🧰 **Analogi:** "Alat-alat yang dipakai di sisi user"

### a. `client/components`

Komponen tampilan yang bisa dipakai ulang

🧱 **Analogi:** "Lego untuk bikin UI"

**Contoh:**

- Button
- Card produk
- Navbar
- Footer

**Fungsi:**

- Membuat UI konsisten
- Menghindari duplikasi kode

---

### b. `client/hooks`

Logika kecil yang bisa dipakai ulang di UI

⚙️ **Analogi:** "Mesin kecil di balik layar UI"

**Contoh:**

- `useModal()` → buka/tutup modal
- `useAuth()` → cek login
- `useScroll()` → deteksi scroll

**Fungsi:**

- Mengelola state
- Menyederhanakan komponen

---

### c. `client/utils`

Helper khusus frontend

🔧 **Analogi:** "Alat bantu kecil"

**Contoh:**

- Format tanggal
- Format harga
- Helper CSS

---

## 4. `server`

> **Ini adalah:** Otak utama sistem (backend)

🧠 **Analogi:** "Dapur & otak perusahaan"

Di sinilah semua keputusan penting dibuat.

### a. `server/actions`

Pintu masuk dari frontend ke backend

🚪 **Analogi:** "Customer service"

Frontend tidak langsung ke database, tapi lewat sini.

**Contoh:**

- `getProducts()`
- `createOrder()`
- `loginUser()`

> 👉 **Ini yang dipanggil dari UI**

---

### b. `server/services`

Tempat logika utama

👨‍🍳 **Analogi:** "Chef di dapur"

**Di sinilah:**

- Perhitungan dilakukan
- Validasi kompleks
- Integrasi API lain

**Contoh:**

- Hitung total harga + pajak
- Validasi stok
- Proses pembayaran

---

### c. `server/utils`

Helper backend

🧪 **Analogi:** "Alat bantu di dapur"

**Contoh:**

- Generate token
- Format response
- Helper database

---

## 5. `shared`

> **Ini adalah:** Kode yang dipakai bersama (client & server)

📜 **Analogi:** "Aturan & bahasa bersama"

### a. `shared/constants`

Nilai tetap

**Contoh:**

- Role user (`ADMIN`, `USER`)
- Status order (`PENDING`, `PAID`)

---

### b. `shared/types`

Struktur data (TypeScript)

**Contoh:**

- `HeaderData`
- `Product`
- `User`

**Fungsi:**

- Menyamakan bahasa antara frontend & backend

---

### c. `shared/utils`

Helper universal

**Contoh:**

- Format angka
- Validator umum
