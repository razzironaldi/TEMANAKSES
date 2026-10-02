# TemanAkses

> Belajar dengan cara yang sesuai denganmu.

## About

TemanAkses adalah platform belajar adaptif yang mengenali bahwa setiap pelajar memiliki kebutuhan, preferensi, dan cara memproses informasi yang berbeda. Alih-alih memaksa semua pengguna menggunakan antarmuka yang sama, TemanAkses menyesuaikan pengalaman belajar berdasarkan preferensi pengguna.

Dibuat untuk **International Innovation 4 Force Batch II 2026 — Web Design Competition** dengan subtema **Human-Centered Technology**.

## Problem

Platform belajar digital sering menyajikan informasi dalam satu format, meskipun pengguna memiliki preferensi belajar, tingkat kenyamanan membaca, dan kebutuhan aksesibilitas yang berbeda-beda. Ini menciptakan hambatan bagi pengguna yang membutuhkan antarmuka yang lebih fokus, lebih sederhana, atau lebih kontras.

## Solution

TemanAkses menyediakan **lima mode belajar adaptif** yang secara nyata mengubah antarmuka:

| Mode | Fungsi |
|------|--------|
| **Visual** | Tampilan standar dengan visual, ikon, dan penanda warna |
| **Fokus** | Menyembunyikan elemen sekunder, memperbesar area baca |
| **Audio** | Pemutar audio menggunakan Web Speech API |
| **Sederhana** | Konten disajikan dalam poin-poin ringkas |
| **Kontras Tinggi** | Kontras warna ditingkatkan untuk keterbacaan |

## Features

- Onboarding preferensi belajar interaktif
- Dashboard personal dengan progres dan rekomendasi
- Materi pembelajaran interaktif dengan konten realistis berbahasa Indonesia
- Lima mode belajar adaptif yang mengubah UI secara nyata
- Pemutar audio menggunakan Web Speech API bawaan browser
- Kontrol aksesibilitas: ukuran teks, jarak teks, kontras
- Pelacakan progres dan bookmark
- State persisten menggunakan localStorage
- Desain responsif untuk desktop, tablet, dan mobile
- Aksesibilitas: semantic HTML, keyboard navigation, ARIA labels, focus states

## UX Concept

```
Kebutuhan Pengguna
      ↓
Preferensi Belajar
      ↓
Antarmuka Adaptif
      ↓
Pengalaman Belajar yang Lebih Baik
      ↓
Progres & Umpan Balik
```

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v7
- **State Management:** Zustand (dengan localStorage persistence)
- **Icons:** Phosphor Icons
- **Audio:** Web Speech API (native browser)

## Installation

```bash
git clone https://github.com/<username>/temanakses.git
cd temanakses
npm install
npm run dev
```

## Development

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run linter
```

## Live Demo

> URL akan ditambahkan setelah deployment

## Team

> Informasi tim akan ditambahkan

---

### AI Usage Disclosure

AI digunakan sebagai alat bantu dalam eksplorasi ide, pengembangan kode, debugging, dan penyempurnaan konten. Keputusan desain, struktur solusi, implementasi akhir, dan validasi karya dilakukan oleh tim peserta.
