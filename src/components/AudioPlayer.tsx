import { useState, useRef, useCallback } from 'react'
import { SpeakerHigh, Pause, Play, Stop } from '@phosphor-icons/react'
import { cn } from '../lib/cn'

interface AudioPlayerProps {
  text: string
  className?: string
}

export function AudioPlayer({ text, className }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const speak = useCallback(() => {
    if (!window.speechSynthesis) return

    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'id-ID'
    u.rate = 0.95
    u.onend = () => {
      setPlaying(false)
      setPaused(false)
    }
    utteranceRef.current = u
    window.speechSynthesis.speak(u)
    setPlaying(true)
    setPaused(false)
  }, [text])

  const togglePause = useCallback(() => {
    if (paused) {
      window.speechSynthesis.resume()
      setPaused(false)
    } else {
      window.speechSynthesis.pause()
      setPaused(true)
    }
  }, [paused])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setPlaying(false)
    setPaused(false)
  }, [])

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-xl border border-border bg-surface-elevated p-3',
        className
      )}
      role="region"
      aria-label="Pemutar audio"
    >
      <SpeakerHigh size={20} className="text-primary-600 shrink-0" weight="bold" />
      <span className="text-sm text-text-secondary flex-1">
        {playing ? (paused ? 'Dijeda' : 'Membacakan...') : 'Dengarkan materi ini'}
      </span>
      <div className="flex gap-1">
        {!playing ? (
          <button
            onClick={speak}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors cursor-pointer"
            aria-label="Putar audio"
          >
            <Play size={14} weight="fill" />
          </button>
        ) : (
          <>
            <button
              onClick={togglePause}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors cursor-pointer"
              aria-label={paused ? 'Lanjutkan' : 'Jeda'}
            >
              {paused ? <Play size={14} weight="fill" /> : <Pause size={14} weight="fill" />}
            </button>
            <button
              onClick={stop}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-muted text-text-secondary hover:bg-surface-hover transition-colors cursor-pointer"
              aria-label="Berhenti"
            >
              <Stop size={14} weight="fill" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
