import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useStore } from '../store'
import { cn } from '../lib/cn'

export function Layout() {
  const { learningMode, textSize, spacingRelaxed } = useStore()

  return (
    <div
      className={cn(
        learningMode === 'high-contrast' && 'high-contrast',
        learningMode === 'focus' && 'focus-mode',
        textSize === 'large' && 'text-size-large',
        textSize === 'extra-large' && 'text-size-extra-large',
        spacingRelaxed && 'spacing-relaxed'
      )}
    >
      <Navbar />
      <main className="min-h-[calc(100dvh-4rem)] pb-20 md:pb-0">
        <Outlet />
      </main>
    </div>
  )
}
