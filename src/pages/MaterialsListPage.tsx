import { Link } from 'react-router-dom'
import { BookOpen, Clock, CheckCircle } from '@phosphor-icons/react'
import { Card, CardBody } from '../components/Card'
import { Badge } from '../components/Badge'
import { ProgressBar } from '../components/ProgressBar'
import { materials } from '../data/materials'
import { useStore } from '../store'

export function MaterialsListPage() {
  const { lessonProgress } = useStore()

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Semua Materi</h1>
      <p className="text-text-secondary mb-8">Pilih materi yang ingin kamu pelajari.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {materials.map((m) => {
          const done = m.sections.filter((s) => lessonProgress[s.id]?.completed).length
          const pct = Math.round((done / m.sections.length) * 100)
          const allDone = done === m.sections.length
          return (
            <Link key={m.id} to={`/materials/${m.id}`} className="group">
              <Card interactive className="h-full">
                <CardBody className="flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <Badge variant={m.accent === 'accent' ? 'accent' : 'primary'}>{m.category}</Badge>
                    {allDone && <CheckCircle size={22} className="text-green-500" weight="fill" />}
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-primary-600 transition-colors">
                    {m.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-text-secondary leading-relaxed flex-1">
                    {m.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} /> {m.sections.length} bagian
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {m.totalDuration} menit
                    </span>
                    <Badge variant={m.level === 'Pemula' ? 'success' : 'neutral'} size="sm">
                      {m.level}
                    </Badge>
                  </div>
                  {pct > 0 && (
                    <div className="mt-3">
                      <ProgressBar value={pct} size="sm" label={`${pct}% selesai`} />
                      <p className="text-[10px] text-text-muted mt-1">{done}/{m.sections.length} selesai</p>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
