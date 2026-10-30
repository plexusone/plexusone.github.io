import { AppWindow, Bot, FileCode2, Layers, Rocket, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Maturity } from '../data/pillars'
import { MATURITY_CLASSES, MATURITY_LABELS } from '../data/pillars'

const ICONS: Record<string, LucideIcon> = {
  bot: Bot,
  server: Server,
  rocket: Rocket,
  spec: FileCode2,
  app: AppWindow,
}

export function PillarIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Layers
  return <Icon className={className} aria-hidden="true" />
}

export function MaturityBadge({ maturity, className = '' }: { maturity: Maturity; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${MATURITY_CLASSES[maturity]} ${className}`}
    >
      {MATURITY_LABELS[maturity]}
    </span>
  )
}
