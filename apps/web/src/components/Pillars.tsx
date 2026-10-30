import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { pillars, PILLAR_COLORS } from '../data/pillars'
import type { Pillar } from '../data/pillars'
import { MaturityBadge, PillarIcon } from './PillarIcon'

function flagshipNames(pillar: Pillar, limit: number): string[] {
  return pillar.groups.flatMap((g) => g.projects.map((p) => p.name)).slice(0, limit)
}

function FamilyCard({ pillar, step }: { pillar: Pillar; step: number }) {
  const colors = PILLAR_COLORS[pillar.color]
  return (
    <Link
      to={pillar.route}
      className={`group relative flex flex-col rounded-2xl border ${colors.border} bg-plexus-slate/40 p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 ${colors.ring}`}
    >
      <div className="flex items-center justify-between mb-4">
        <PillarIcon name={pillar.icon} className={`w-9 h-9 ${colors.text}`} />
        <MaturityBadge maturity={pillar.maturity} />
      </div>
      <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
        {step}. {pillar.eyebrow}
      </span>
      <h3 className="text-2xl font-bold text-white mt-1 mb-2">{pillar.name}</h3>
      <p className="text-gray-300 mb-5">{pillar.outcome}</p>
      <ul className="mt-auto flex flex-wrap gap-2" aria-label={`${pillar.name} projects`}>
        {flagshipNames(pillar, 5).map((name) => (
          <li key={name} className="px-2.5 py-1 rounded-full text-xs text-gray-300 bg-white/5 border border-white/10">
            {name}
          </li>
        ))}
      </ul>
      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${colors.text}`}>
        Explore {pillar.name}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}

function BandCard({ pillar }: { pillar: Pillar }) {
  const colors = PILLAR_COLORS[pillar.color]
  return (
    <Link
      to={pillar.route}
      className={`group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 rounded-2xl border ${colors.border} bg-gradient-to-r ${colors.gradient} to-plexus-slate/30 p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 ${colors.ring}`}
    >
      <div className="flex items-center gap-4 md:w-72 shrink-0">
        <PillarIcon name={pillar.icon} className={`w-10 h-10 shrink-0 ${colors.text}`} />
        <div>
          <span className={`block text-xs font-semibold uppercase tracking-wider ${colors.text}`}>{pillar.eyebrow}</span>
          <span className="block text-2xl font-bold text-white">{pillar.name}</span>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-gray-200 mb-3">{pillar.outcome}</p>
        <ul className="flex flex-wrap gap-2" aria-label={`${pillar.name} projects`}>
          {flagshipNames(pillar, 8).map((name) => (
            <li key={name} className="px-2.5 py-1 rounded-full text-xs text-gray-300 bg-white/5 border border-white/10">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex md:flex-col items-center md:items-end gap-3 shrink-0">
        <MaturityBadge maturity={pillar.maturity} />
        <span className={`inline-flex items-center gap-1 text-sm font-medium ${colors.text}`}>
          Explore
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

export function Pillars() {
  const families = pillars.filter((p) => p.kind === 'family')
  const foundation = pillars.filter((p) => p.kind === 'foundation')
  const workbench = pillars.filter((p) => p.kind === 'workbench')

  return (
    <section id="pillars" className="py-24 px-4 scroll-mt-16" aria-labelledby="pillars-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="pillars-heading" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Build it. Run it. </span>
            <span className="gradient-text">Ship it.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three product families take software from AI agents to production SaaS to automated
            operations. Open specs sit underneath all three, and the PlexusOne app is the
            workbench where agents help build it.
          </p>
        </div>

        {/* Product families: a left-to-right flow */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 lg:gap-3 items-stretch">
          {families.map((pillar, i) => (
            <div key={pillar.id} className="contents">
              <FamilyCard pillar={pillar} step={i + 1} />
              {i < families.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-gray-600" aria-hidden="true">
                  <ChevronRight size={28} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Foundation and workbench span all three families */}
        <div className="mt-4 space-y-4">
          {foundation.map((pillar) => (
            <BandCard key={pillar.id} pillar={pillar} />
          ))}
          {workbench.map((pillar) => (
            <BandCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}
