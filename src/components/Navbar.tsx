import { Link, useLocation } from 'react-router-dom'
import {
  House,
  Compass,
  ChartBar,
  User,
  GearSix,
  List,
  X,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { cn } from '../lib/cn'
import { useStore } from '../store'
import { getMode } from '../data/modes'

const nav = [
  { to: '/dashboard', label: 'Beranda', icon: House },
  { to: '/materials', label: 'Materi', icon: Compass },
  { to: '/progress', label: 'Progres', icon: ChartBar },
  { to: '/settings', label: 'Pengaturan', icon: GearSix },
  { to: '/profile', label: 'Profil', icon: User },
]

export function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const { learningMode } = useStore()
  const mode = getMode(learningMode)

  return (
    <>
      <nav
        className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-lg focus-hide"
        aria-label="Navigasi utama"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5" aria-label="TemanAkses Beranda">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-sm">
              TA
            </div>
            <span className="font-bold text-lg text-text-primary tracking-tight hidden sm:inline">
              TemanAkses
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {nav.map((n) => {
              const active = pathname === n.to || pathname.startsWith(n.to + '/')
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    'flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted'
                  )}
                >
                  <n.icon size={18} weight={active ? 'bold' : 'regular'} />
                  {n.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium text-text-secondary">
              Mode: {mode.name}
            </span>
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface-muted transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-surface px-4 py-3 space-y-1">
            {nav.map((n) => {
              const active = pathname === n.to
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-text-secondary hover:bg-surface-muted'
                  )}
                >
                  <n.icon size={18} weight={active ? 'bold' : 'regular'} />
                  {n.label}
                </Link>
              )
            })}
          </div>
        )}
      </nav>

      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-surface/90 backdrop-blur-lg md:hidden focus-hide"
        role="navigation"
        aria-label="Navigasi mobile"
      >
        <div className="flex justify-around py-2">
          {nav.slice(0, 4).map((n) => {
            const active = pathname === n.to || pathname.startsWith(n.to + '/')
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  'flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium transition-colors',
                  active ? 'text-primary-600' : 'text-text-muted'
                )}
              >
                <n.icon size={22} weight={active ? 'bold' : 'regular'} />
                {n.label}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
