import { ArrowCounterClockwise, TextAa, ArrowsOutSimple } from '@phosphor-icons/react'
import { Button } from '../components/Button'
import { Card, CardBody } from '../components/Card'
import { ModeSelector } from '../components/ModeSelector'
import { useStore } from '../store'
import { cn } from '../lib/cn'
import type { TextSize } from '../store'

const textSizes: { id: TextSize; label: string }[] = [
  { id: 'normal', label: 'Normal' },
  { id: 'large', label: 'Besar' },
  { id: 'extra-large', label: 'Sangat Besar' },
]

export function SettingsPage() {
  const {
    textSize,
    setTextSize,
    spacingRelaxed,
    setSpacingRelaxed,
    audioEnabled,
    setAudioEnabled,
    resetPreferences,
  } = useStore()

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Pengaturan</h1>
      <p className="text-text-secondary mb-8">Sesuaikan pengalaman belajarmu.</p>

      <div className="space-y-6">
        <Card>
          <CardBody>
            <h2 className="font-semibold text-text-primary mb-4">Mode Belajar</h2>
            <ModeSelector />
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h2 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
              <TextAa size={20} className="text-primary-600" />
              Ukuran Teks
            </h2>
            <div className="flex gap-3" role="radiogroup" aria-label="Ukuran teks">
              {textSizes.map((ts) => (
                <button
                  key={ts.id}
                  role="radio"
                  aria-checked={textSize === ts.id}
                  onClick={() => setTextSize(ts.id)}
                  className={cn(
                    'flex-1 rounded-xl border px-4 py-3 text-sm font-medium text-center transition-all cursor-pointer',
                    textSize === ts.id
                      ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500'
                      : 'border-border hover:border-primary-300 text-text-secondary'
                  )}
                >
                  {ts.label}
                </button>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="space-y-4">
            <h2 className="font-semibold text-text-primary flex items-center gap-2">
              <ArrowsOutSimple size={20} className="text-primary-600" />
              Preferensi Lainnya
            </h2>

            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <div>
                <p className="text-sm font-medium text-text-primary">Jarak teks lebih lebar</p>
                <p className="text-xs text-text-muted">Menambah jarak antar huruf dan kata.</p>
              </div>
              <button
                role="switch"
                aria-checked={spacingRelaxed}
                onClick={() => setSpacingRelaxed(!spacingRelaxed)}
                className={cn(
                  'relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors cursor-pointer',
                  spacingRelaxed ? 'bg-primary-600' : 'bg-surface-hover'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform mt-0.5',
                    spacingRelaxed ? 'translate-x-[22px]' : 'translate-x-0.5'
                  )}
                />
              </button>
            </label>

            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <div>
                <p className="text-sm font-medium text-text-primary">Dukungan audio</p>
                <p className="text-xs text-text-muted">Tampilkan pemutar audio di halaman materi.</p>
              </div>
              <button
                role="switch"
                aria-checked={audioEnabled}
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={cn(
                  'relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors cursor-pointer',
                  audioEnabled ? 'bg-primary-600' : 'bg-surface-hover'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform mt-0.5',
                    audioEnabled ? 'translate-x-[22px]' : 'translate-x-0.5'
                  )}
                />
              </button>
            </label>
          </CardBody>
        </Card>

        <div className="flex justify-end">
          <Button variant="ghost" onClick={resetPreferences} className="text-error">
            <ArrowCounterClockwise size={16} />
            Reset Semua Preferensi
          </Button>
        </div>
      </div>
    </div>
  )
}
