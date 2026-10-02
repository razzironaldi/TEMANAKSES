import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  ArrowLeft,
  BookmarkSimple,
  CheckCircle,
  Clock,
  CaretDown,
  CaretUp,
  ListChecks,
} from '@phosphor-icons/react'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { ProgressBar } from '../components/ProgressBar'
import { ModeSelector } from '../components/ModeSelector'
import { AudioPlayer } from '../components/AudioPlayer'
import { useStore } from '../store'
import { getMaterial } from '../data/materials'
import { cn } from '../lib/cn'

export function MaterialDetailPage() {
  const { id } = useParams<{ id: string }>()
  const material = getMaterial(id ?? '')
  const [activeSection, setActiveSection] = useState(0)
  const [showModes, setShowModes] = useState(false)
  const {
    learningMode,
    audioEnabled,
    lessonProgress,
    toggleLessonComplete,
    toggleBookmark,
    accessLesson,
  } = useStore()

  const section = material?.sections[activeSection]

  useEffect(() => {
    if (section) accessLesson(section.id)
  }, [section, accessLesson])

  if (!material || !section) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-xl font-bold text-text-primary">Materi tidak ditemukan</h1>
        <Button to="/materials" variant="outline" className="mt-4">
          <ArrowLeft size={16} />
          Kembali ke Materi
        </Button>
      </div>
    )
  }

  const sectionProgress = lessonProgress[section.id]
  const isCompleted = sectionProgress?.completed ?? false
  const isBookmarked = sectionProgress?.bookmarked ?? false
  const doneSections = material.sections.filter((s) => lessonProgress[s.id]?.completed).length
  const overallPct = Math.round((doneSections / material.sections.length) * 100)

  const isFocus = learningMode === 'focus'
  const isSimple = learningMode === 'simple'
  const isAudio = learningMode === 'audio' || audioEnabled

  const audioText = section.paragraphs.join('. ')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
      <div className="flex items-center gap-2 mb-6">
        <Link
          to="/materials"
          className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Materi
        </Link>
        <span className="text-text-muted">/</span>
        <span className="text-sm text-text-primary font-medium truncate">{material.title}</span>
      </div>

      <div className={cn('grid gap-6', isFocus ? '' : 'lg:grid-cols-[280px_1fr]')}>
        {!isFocus && (
          <aside className="space-y-4 focus-hide" aria-label="Daftar bagian">
            <div className="rounded-xl border border-border bg-surface p-4">
              <h2 className="font-semibold text-sm text-text-primary mb-1">{material.title}</h2>
              <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                <Badge size="sm">{material.level}</Badge>
                <span className="flex items-center gap-1"><Clock size={12} /> {material.totalDuration} menit</span>
              </div>
              <ProgressBar value={overallPct} size="sm" label={`${overallPct}% selesai`} />
              <p className="text-[10px] text-text-muted mt-1">{doneSections}/{material.sections.length} selesai</p>
            </div>

            <nav className="rounded-xl border border-border bg-surface overflow-hidden">
              {material.sections.map((s, i) => {
                const done = lessonProgress[s.id]?.completed
                const active = i === activeSection
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(i)}
                    className={cn(
                      'flex items-center gap-2 w-full px-4 py-3 text-left text-sm transition-colors border-b border-border last:border-b-0 cursor-pointer',
                      active
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-text-secondary hover:bg-surface-muted'
                    )}
                    aria-current={active ? 'step' : undefined}
                  >
                    {done ? (
                      <CheckCircle size={18} className="text-green-500 shrink-0" weight="fill" />
                    ) : (
                      <span
                        className={cn(
                          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold',
                          active ? 'border-primary-500 text-primary-600 bg-primary-100' : 'border-border text-text-muted'
                        )}
                      >
                        {i + 1}
                      </span>
                    )}
                    <span className="truncate">{s.title}</span>
                  </button>
                )
              })}
            </nav>

            <div className="rounded-xl border border-border bg-surface p-4">
              <button
                onClick={() => setShowModes(!showModes)}
                className="flex items-center justify-between w-full text-sm font-semibold text-text-primary cursor-pointer"
                aria-expanded={showModes}
              >
                Mode Belajar
                {showModes ? <CaretUp size={14} /> : <CaretDown size={14} />}
              </button>
              {showModes && (
                <div className="mt-3">
                  <ModeSelector compact />
                </div>
              )}
            </div>
          </aside>
        )}

        <article className="min-w-0">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{section.title}</h1>
                <div className="flex items-center gap-3 mt-2 text-sm text-text-muted">
                  <span className="flex items-center gap-1"><Clock size={14} /> {section.duration} menit</span>
                  <span>Bagian {activeSection + 1}/{material.sections.length}</span>
                </div>
              </div>
              <button
                onClick={() => toggleBookmark(section.id)}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg transition-colors cursor-pointer',
                  isBookmarked
                    ? 'bg-accent-100 text-accent-600'
                    : 'bg-surface-muted text-text-muted hover:text-text-secondary'
                )}
                aria-label={isBookmarked ? 'Hapus penanda' : 'Tandai'}
                aria-pressed={isBookmarked}
              >
                <BookmarkSimple size={20} weight={isBookmarked ? 'fill' : 'regular'} />
              </button>
            </div>

            {isAudio && <AudioPlayer text={audioText} className="mb-6" />}

            {isFocus && (
              <div className="mb-4">
                <ModeSelector compact />
              </div>
            )}

            <div className="prose max-w-none">
              {isSimple ? (
                <div className="space-y-4">
                  <div className="rounded-xl bg-primary-50 border border-primary-100 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <ListChecks size={18} className="text-primary-600" weight="bold" />
                      <h3 className="font-semibold text-primary-800 text-sm">Poin Penting</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.keyPoints.map((kp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                          <CheckCircle size={16} className="text-primary-500 shrink-0 mt-0.5" weight="bold" />
                          {kp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm text-text-secondary leading-relaxed">{p}</p>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed">{p}</p>
                  ))}
                  <div className="rounded-xl bg-surface-elevated border border-border p-5 mt-6">
                    <h3 className="font-semibold text-sm text-text-primary mb-3">Poin Penting</h3>
                    <ul className="space-y-2">
                      {section.keyPoints.map((kp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle size={16} className="text-primary-500 shrink-0 mt-0.5" weight="bold" />
                          {kp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 pt-6 border-t border-border">
              <Button
                onClick={() => toggleLessonComplete(section.id)}
                variant={isCompleted ? 'secondary' : 'primary'}
                className={isCompleted ? 'text-green-700' : ''}
              >
                <CheckCircle size={18} weight={isCompleted ? 'fill' : 'regular'} />
                {isCompleted ? 'Selesai' : 'Tandai Selesai'}
              </Button>

              {activeSection < material.sections.length - 1 && (
                <Button
                  variant="outline"
                  onClick={() => setActiveSection((p) => p + 1)}
                >
                  Bagian Berikutnya
                </Button>
              )}

              {activeSection > 0 && (
                <Button
                  variant="ghost"
                  onClick={() => setActiveSection((p) => p - 1)}
                >
                  Sebelumnya
                </Button>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
