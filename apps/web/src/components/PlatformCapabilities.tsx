import { MessagesSquare, Brain, Plug, ShieldCheck, Activity, Layers, ExternalLink, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import capabilityData from '../data/capability-domains.json'
import { PlatformDiagram } from './PlatformDiagram'

const domainIcons: Record<string, LucideIcon> = {
  experiences: MessagesSquare,
  'agent-intelligence': Brain,
  connectivity: Plug,
  trust: ShieldCheck,
  operations: Activity,
  foundations: Layers,
}

const colorClasses: Record<string, string> = {
  cyan: 'text-plexus-cyan',
  purple: 'text-plexus-purple',
  pink: 'text-plexus-pink',
  violet: 'text-plexus-violet',
}

export function PlatformCapabilities() {
  return (
    <section id="platform" className="py-24 px-4" role="region" aria-label="Platform capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">One Platform</span>
            <span className="text-white">, Six Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything needed to build, connect, secure, and operate AI-native software—delivered
            as composable Go modules, open specifications, and reusable components.
          </p>
        </div>

        {/* Hub-and-spoke marketecture: OmniAgent composing the six capability domains. */}
        <PlatformDiagram />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityData.domains.map((domain) => {
            const Icon = domainIcons[domain.id] ?? Layers
            const iconColor = colorClasses[domain.color] ?? 'text-plexus-cyan'
            return (
              <div
                key={domain.id}
                className="p-6 rounded-xl bg-plexus-slate/30 border border-white/5 hover:border-white/15 transition-colors flex flex-col"
              >
                <Icon className={`w-10 h-10 ${iconColor} mb-4`} aria-hidden="true" />
                <h3 className="text-xl font-bold mb-2">
                  <Link
                    to={`/platform#${domain.id}`}
                    className="text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple rounded"
                  >
                    {domain.name}
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4">{domain.outcome}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {domain.capabilities.map((capability) => (
                    <Link
                      key={capability.id}
                      to={`/platform#${capability.id}`}
                      className="px-2.5 py-1 rounded-full text-xs text-gray-300 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple"
                    >
                      {capability.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Flagship projects</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {domain.projects.map((project) => (
                      <a
                        key={project.repo}
                        href={`https://github.com/plexusone/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-sm ${iconColor} hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple rounded`}
                        aria-label={`${project.name} on GitHub (opens in new tab)`}
                      >
                        {project.name}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 focus-visible:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple focus-visible:ring-offset-2 focus-visible:ring-offset-plexus-dark"
          >
            Explore the Full Platform Map
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
