export interface LessonSection {
  id: string
  title: string
  paragraphs: string[]
  keyPoints: string[]
  duration: number
}

export interface Material {
  id: string
  title: string
  category: string
  description: string
  level: string
  totalDuration: number
  sections: LessonSection[]
  accent: string
  icon: string
}

export const materials: Material[] = [
  {
    id: 'dasar-web',
    title: 'Dasar Pemrograman Web',
    category: 'Teknologi',
    description:
      'Pelajari fondasi HTML, CSS, dan JavaScript untuk membangun halaman web pertamamu.',
    level: 'Pemula',
    totalDuration: 45,
    accent: 'primary',
    icon: 'Code',
    sections: [
      {
        id: 'web-1',
        title: 'Apa itu Halaman Web?',
        duration: 10,
        paragraphs: [
          'Halaman web adalah dokumen yang dapat kamu lihat melalui peramban seperti Chrome, Firefox, atau Safari. Setiap halaman web dibangun dari tiga teknologi utama yang bekerja bersama.',
          'HTML menyusun struktur konten, seperti judul, paragraf, dan gambar. CSS mengatur tampilan visual, seperti warna, ukuran, dan tata letak. JavaScript menambahkan interaksi, sehingga halaman dapat merespons tindakan pengguna.',
        ],
        keyPoints: [
          'HTML = struktur konten',
          'CSS = tampilan visual',
          'JavaScript = interaksi',
        ],
      },
      {
        id: 'web-2',
        title: 'Menyusun Struktur dengan HTML',
        duration: 12,
        paragraphs: [
          'HTML menggunakan elemen untuk menandai bagian-bagian konten. Elemen ditulis dengan tanda kurung sudut, misalnya untuk membuat paragraf atau untuk judul.',
          'Setiap elemen dapat memiliki atribut yang memberi informasi tambahan. Struktur yang rapi membuat konten mudah dibaca oleh manusia maupun mesin pencari.',
        ],
        keyPoints: [
          'Elemen HTML membentuk struktur',
          'Atribut memberi informasi tambahan',
          'Struktur yang baik membantu aksesibilitas',
        ],
      },
      {
        id: 'web-3',
        title: 'Mengatur Tampilan dengan CSS',
        duration: 13,
        paragraphs: [
          'CSS memisahkan tampilan dari struktur. Kamu dapat mengubah warna, jarak, ukuran huruf, dan tata letak tanpa mengubah isi konten.',
          'Dengan CSS, satu perubahan dapat memengaruhi seluruh halaman. Ini membuat situs lebih konsisten dan mudah dipelihara.',
        ],
        keyPoints: [
          'CSS mengatur tampilan',
          'Tampilan terpisah dari struktur',
          'Konsistensi lebih mudah dijaga',
        ],
      },
      {
        id: 'web-4',
        title: 'Menambah Interaksi dengan JavaScript',
        duration: 10,
        paragraphs: [
          'JavaScript membuat halaman web menjadi hidup. Dengan JavaScript, tombol dapat merespons klik, formulir dapat divalidasi, dan konten dapat berubah tanpa memuat ulang halaman.',
          'Mulailah dari interaksi sederhana, lalu tingkatkan seiring pemahamanmu bertambah.',
        ],
        keyPoints: [
          'JavaScript menambah interaksi',
          'Halaman dapat berubah tanpa reload',
          'Mulai dari yang sederhana',
        ],
      },
    ],
  },
  {
    id: 'literasi-digital',
    title: 'Literasi Digital Sehari-hari',
    category: 'Keterampilan',
    description:
      'Cara mengenali informasi yang dapat dipercaya dan menjaga keamanan data pribadi saat online.',
    level: 'Pemula',
    totalDuration: 30,
    accent: 'accent',
    icon: 'ShieldCheck',
    sections: [
      {
        id: 'lit-1',
        title: 'Menilai Sumber Informasi',
        duration: 10,
        paragraphs: [
          'Tidak semua informasi di internet akurat. Sebelum mempercayai sebuah informasi, periksa siapa yang menulisnya, kapan dipublikasikan, dan apakah ada sumber lain yang mendukungnya.',
          'Membandingkan beberapa sumber membantu kamu membedakan fakta dari opini yang belum terverifikasi.',
        ],
        keyPoints: [
          'Periksa penulis dan tanggal',
          'Bandingkan beberapa sumber',
          'Bedakan fakta dan opini',
        ],
      },
      {
        id: 'lit-2',
        title: 'Menjaga Data Pribadi',
        duration: 10,
        paragraphs: [
          'Data pribadi seperti nomor telepon, alamat, dan kata sandi harus dijaga. Gunakan kata sandi yang kuat dan berbeda untuk setiap akun penting.',
          'Berhati-hatilah saat membagikan informasi di platform publik dan selalu periksa pengaturan privasi akunmu.',
        ],
        keyPoints: [
          'Gunakan kata sandi kuat dan unik',
          'Periksa pengaturan privasi',
          'Hati-hati saat berbagi data',
        ],
      },
      {
        id: 'lit-3',
        title: 'Mengenali Penipuan Online',
        duration: 10,
        paragraphs: [
          'Penipuan online sering memanfaatkan rasa panik atau ketergesaan. Tawaran yang terlalu bagus, permintaan mendesak, atau tautan mencurigakan adalah tanda peringatan.',
          'Jangan pernah membagikan kode verifikasi kepada siapa pun, bahkan jika mereka mengaku dari layanan resmi.',
        ],
        keyPoints: [
          'Waspadai tawaran terlalu bagus',
          'Jangan bagikan kode verifikasi',
          'Verifikasi sebelum bertindak',
        ],
      },
    ],
  },
  {
    id: 'belajar-efektif',
    title: 'Strategi Belajar Efektif',
    category: 'Pengembangan Diri',
    description:
      'Teknik belajar yang terbukti membantu memahami materi lebih dalam dan bertahan lama.',
    level: 'Menengah',
    totalDuration: 35,
    accent: 'primary',
    icon: 'Brain',
    sections: [
      {
        id: 'bel-1',
        title: 'Belajar dengan Jeda',
        duration: 12,
        paragraphs: [
          'Otak menyerap informasi lebih baik ketika belajar dilakukan secara bertahap dan diulang dalam beberapa sesi, bukan dalam satu waktu panjang.',
          'Cobalah mengulang materi setelah satu hari, lalu satu minggu, lalu satu bulan. Pola ini membantu memindahkan informasi ke ingatan jangka panjang.',
        ],
        keyPoints: [
          'Belajar bertahap lebih efektif',
          'Ulangi dengan jeda waktu',
          'Hindari belajar menumpuk',
        ],
      },
      {
        id: 'bel-2',
        title: 'Menguji Diri Sendiri',
        duration: 11,
        paragraphs: [
          'Mencoba menjelaskan materi dengan kata sendiri atau menjawab pertanyaan tanpa melihat catatan memperkuat pemahaman.',
          'Metode ini menunjukkan bagian yang belum kamu kuasai, sehingga kamu tahu apa yang perlu dipelajari lebih lanjut.',
        ],
        keyPoints: [
          'Uji diri tanpa melihat catatan',
          'Jelaskan dengan kata sendiri',
          'Temukan celah pemahaman',
        ],
      },
      {
        id: 'bel-3',
        title: 'Mengatur Fokus',
        duration: 12,
        paragraphs: [
          'Fokus adalah keterampilan, bukan bakat. Bekerja dalam blok waktu yang jelas dengan jeda pendek membantu menjaga energi dan konsentrasi.',
          'Kurangi gangguan dengan menutup notifikasi dan menyiapkan ruang belajar yang tenang.',
        ],
        keyPoints: [
          'Fokus dapat dilatih',
          'Gunakan blok waktu dan jeda',
          'Kurangi sumber gangguan',
        ],
      },
    ],
  },
]

export const getMaterial = (id: string) => materials.find((m) => m.id === id)

export const allLessons = materials.flatMap((m) =>
  m.sections.map((s) => ({ ...s, materialId: m.id, materialTitle: m.title }))
)

export const totalLessons = allLessons.length
