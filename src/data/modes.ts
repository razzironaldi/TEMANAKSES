import type { LearningMode } from '../store'

export interface ModeDefinition {
  id: LearningMode
  name: string
  short: string
  description: string
  icon: string
  color: string
}

export const learningModes: ModeDefinition[] = [
  {
    id: 'visual',
    name: 'Visual',
    short: 'Tampilan standar',
    description:
      'Tampilan lengkap dengan visual, ikon, dan penanda warna untuk membantu memahami materi.',
    icon: 'Palette',
    color: 'primary',
  },
  {
    id: 'focus',
    name: 'Fokus',
    short: 'Minim gangguan',
    description:
      'Menyembunyikan elemen sekunder dan memperbesar area baca agar kamu bisa berkonsentrasi penuh.',
    icon: 'Target',
    color: 'primary',
  },
  {
    id: 'audio',
    name: 'Audio',
    short: 'Belajar sambil mendengar',
    description:
      'Pemutar audio untuk mendengarkan materi, cocok jika kamu lebih mudah memahami lewat suara.',
    icon: 'SpeakerHigh',
    color: 'accent',
  },
  {
    id: 'simple',
    name: 'Sederhana',
    short: 'Bahasa ringkas',
    description:
      'Materi disajikan dalam poin-poin singkat dan bahasa yang lebih mudah dicerna.',
    icon: 'ListChecks',
    color: 'primary',
  },
  {
    id: 'high-contrast',
    name: 'Kontras Tinggi',
    short: 'Paling jelas',
    description:
      'Kontras warna ditingkatkan dan teks dipertegas untuk membantu keterbacaan.',
    icon: 'CircleHalf',
    color: 'accent',
  },
]

export const getMode = (id: LearningMode) => learningModes.find((m) => m.id === id)!
