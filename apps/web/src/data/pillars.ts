// Types and helpers for the five platform pillars. The content lives in
// pillars.json; repos listed there must be public.

import pillarData from './pillars.json'

export type PillarColor = 'cyan' | 'purple' | 'pink' | 'violet' | 'emerald' | 'amber'

export type Maturity = 'production' | 'active' | 'early'

export interface PillarProject {
  name: string
  repo: string
  tagline: string
  description?: string
  features?: string[]
  docsUrl?: string
  status?: Maturity
}

export interface PillarGroup {
  name: string
  description?: string
  projects: PillarProject[]
}

export interface PillarHighlight {
  title: string
  description: string
}

export interface Pillar {
  id: string
  name: string
  route: string
  /** Where the pillar sits in the overview diagram */
  kind: 'workbench' | 'family' | 'foundation'
  order: number
  icon: string
  color: PillarColor
  maturity: Maturity
  eyebrow: string
  tagline: string
  outcome: string
  description: string
  highlights: PillarHighlight[]
  groups: PillarGroup[]
  /** spa: true for routes inside this React app; false for MkDocs sites and external links */
  related?: { label: string; href: string; spa?: boolean }[]
}

export const pillars: Pillar[] = (pillarData.pillars as Pillar[]).slice().sort((a, b) => a.order - b.order)

export function getPillar(id: string): Pillar | undefined {
  return pillars.find((p) => p.id === id)
}

export const MATURITY_LABELS: Record<Maturity, string> = {
  production: 'In use today',
  active: 'Active development',
  early: 'Early preview',
}

export const MATURITY_CLASSES: Record<Maturity, string> = {
  production: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  active: 'bg-plexus-cyan/15 text-plexus-cyan-light border-plexus-cyan/30',
  early: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
}

// Full class names so Tailwind keeps them.
export const PILLAR_COLORS: Record<
  PillarColor,
  { text: string; border: string; bg: string; ring: string; gradient: string }
> = {
  cyan: {
    text: 'text-plexus-cyan',
    border: 'border-plexus-cyan/30 hover:border-plexus-cyan/60',
    bg: 'bg-plexus-cyan/10',
    ring: 'focus-visible:ring-plexus-cyan',
    gradient: 'from-plexus-cyan/20',
  },
  purple: {
    text: 'text-plexus-purple-light',
    border: 'border-plexus-purple/30 hover:border-plexus-purple/60',
    bg: 'bg-plexus-purple/10',
    ring: 'focus-visible:ring-plexus-purple',
    gradient: 'from-plexus-purple/20',
  },
  pink: {
    text: 'text-plexus-pink-light',
    border: 'border-plexus-pink/30 hover:border-plexus-pink/60',
    bg: 'bg-plexus-pink/10',
    ring: 'focus-visible:ring-plexus-pink',
    gradient: 'from-plexus-pink/20',
  },
  violet: {
    text: 'text-plexus-violet',
    border: 'border-plexus-violet/30 hover:border-plexus-violet/60',
    bg: 'bg-plexus-violet/10',
    ring: 'focus-visible:ring-plexus-violet',
    gradient: 'from-plexus-violet/20',
  },
  emerald: {
    text: 'text-emerald-300',
    border: 'border-emerald-400/30 hover:border-emerald-400/60',
    bg: 'bg-emerald-400/10',
    ring: 'focus-visible:ring-emerald-400',
    gradient: 'from-emerald-400/20',
  },
  amber: {
    text: 'text-amber-300',
    border: 'border-amber-400/30 hover:border-amber-400/60',
    bg: 'bg-amber-400/10',
    ring: 'focus-visible:ring-amber-400',
    gradient: 'from-amber-400/20',
  },
}
