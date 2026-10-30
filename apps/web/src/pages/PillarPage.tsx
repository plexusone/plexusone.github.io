import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, Github } from 'lucide-react'
import { getPillar, pillars, PILLAR_COLORS } from '../data/pillars'
import type { PillarProject } from '../data/pillars'
import { MaturityBadge, PillarIcon } from '../components/PillarIcon'

function ProjectCard({ project, accent }: { project: PillarProject; accent: string }) {
  return (
    <article className="rounded-xl border border-white/10 bg-plexus-slate/30 p-6 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h4 className={`text-xl font-bold ${accent}`}>{project.name}</h4>
        {project.status && <MaturityBadge maturity={project.status} className="shrink-0" />}
      </div>
      <p className="text-sm text-gray-400 mb-3">{project.tagline}</p>
      {project.description && <p className="text-gray-300 mb-4">{project.description}</p>}
      {project.features && project.features.length > 0 && (
        <ul className="space-y-1.5 mb-5 text-sm text-gray-300">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" aria-hidden="true" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <a
          href={`https://github.com/plexusone/${project.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 text-gray-200 text-sm hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
          aria-label={`${project.name} on GitHub (opens in new tab)`}
        >
          <Github size={16} aria-hidden="true" />
          GitHub
        </a>
        {project.docsUrl && (
          <a
            href={project.docsUrl}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 text-gray-200 text-sm hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
          >
            <BookOpen size={16} aria-hidden="true" />
            Docs
          </a>
        )}
      </div>
    </article>
  )
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function PillarPage({ id, children }: { id: string; children?: ReactNode }) {
  const pillar = getPillar(id)

  if (!pillar) {
    return (
      <div className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Not found</h1>
        <Link to="/" className="text-plexus-cyan hover:underline">
          Return home
        </Link>
      </div>
    )
  }

  const colors = PILLAR_COLORS[pillar.color]
  const index = pillars.findIndex((p) => p.id === pillar.id)
  const prev = index > 0 ? pillars[index - 1] : undefined
  const next = index < pillars.length - 1 ? pillars[index + 1] : undefined

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className={`relative rounded-2xl border border-white/10 bg-gradient-to-br ${colors.gradient} via-transparent to-transparent p-8 md:p-12 mb-12 overflow-hidden`}>
          <Link
            to="/#pillars"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white mb-6 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All of PlexusOne
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <PillarIcon name={pillar.icon} className={`w-9 h-9 ${colors.text}`} />
            <span className={`text-sm font-semibold uppercase tracking-wider ${colors.text}`}>{pillar.eyebrow}</span>
            <MaturityBadge maturity={pillar.maturity} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{pillar.name}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl">{pillar.tagline}</p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">{pillar.description}</p>
        </header>

        {/* Highlights */}
        {pillar.highlights.length > 0 && (
          <section aria-labelledby="highlights" className="mb-16">
            <h2 id="highlights" className="sr-only">Highlights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pillar.highlights.map((h) => (
                <div key={h.title} className={`rounded-xl border ${colors.border} ${colors.bg} p-5 transition-colors`}>
                  <h3 className={`font-semibold mb-1.5 ${colors.text}`}>{h.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pillar-specific content */}
        {children}

        {/* Project groups */}
        {pillar.groups.map((group) => {
          const groupId = `${pillar.id}-${slugify(group.name)}`
          return (
            <section key={group.name} className="mb-14" aria-labelledby={groupId}>
              <div className="mb-6">
                <h2 id={groupId} className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {group.name}
                </h2>
                {group.description && <p className="text-gray-400 max-w-3xl">{group.description}</p>}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.projects.map((project) => (
                  <ProjectCard key={project.repo} project={project} accent={colors.text} />
                ))}
              </div>
            </section>
          )
        })}

        {pillar.related && pillar.related.length > 0 && (
          <section className="mb-14" aria-label="Related">
            <div className="flex flex-wrap gap-3">
              {pillar.related.map((r) =>
                r.spa ? (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
                  >
                    {r.label}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                ) : (
                  <a
                    key={r.href}
                    href={r.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
                  >
                    {r.label}
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                )
              )}
            </div>
          </section>
        )}

        {/* Previous / next pillar */}
        <nav className="grid sm:grid-cols-2 gap-4 border-t border-white/10 pt-8" aria-label="Other pillars">
          {prev ? (
            <Link
              to={prev.route}
              className="rounded-xl border border-white/10 p-5 hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
            >
              <span className="text-xs uppercase tracking-wider text-gray-500">Previous</span>
              <span className="flex items-center gap-2 text-lg font-semibold text-white mt-1">
                <ArrowLeft size={16} aria-hidden="true" /> {prev.name}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={next.route}
              className="rounded-xl border border-white/10 p-5 hover:border-white/30 transition-colors text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
            >
              <span className="text-xs uppercase tracking-wider text-gray-500">Next</span>
              <span className="flex items-center justify-end gap-2 text-lg font-semibold text-white mt-1">
                {next.name} <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          )}
        </nav>
      </div>
    </div>
  )
}
