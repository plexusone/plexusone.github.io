import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Link as LinkIcon } from 'lucide-react'

interface Implementation {
  project: string
  role: string
}

interface Capability {
  id: string
  name: string
  description: string
  implementations: Implementation[]
}

interface Layer {
  id: string
  name: string
  order: number
  outcome: string
  description?: string
  capabilities: Capability[]
}

interface CapabilityStack {
  name: string
  description: string
  layers: Layer[]
}

interface Product {
  name: string
  slug: string
  tagline: string
  category: string
  githubUrl?: string
}

const CATEGORY_PATHS: Record<string, string> = {
  library: '/libraries',
  agent: '/agents',
  application: '/applications',
  specification: '/specifications',
}

// Display order and styling for implementation roles
const ROLE_ORDER = [
  'primary',
  'core',
  'specifies',
  'provider',
  'supports',
  'integrates',
  'demonstrates',
  'application',
]

const ROLE_LABELS: Record<string, string> = {
  primary: 'Primary',
  core: 'Core',
  specifies: 'Spec',
  provider: 'Provider',
  supports: 'Supporting',
  integrates: 'Integration',
  demonstrates: 'Example',
  application: 'App',
}

const ROLE_BADGE_CLASSES: Record<string, string> = {
  primary: 'bg-plexus-cyan/20 text-plexus-cyan border-plexus-cyan/30',
  core: 'bg-plexus-purple/20 text-plexus-purple border-plexus-purple/30',
  specifies: 'bg-plexus-pink/20 text-plexus-pink border-plexus-pink/30',
  provider: 'bg-white/5 text-gray-300 border-white/10',
  supports: 'bg-white/5 text-gray-300 border-white/10',
  integrates: 'bg-white/5 text-gray-300 border-white/10',
  demonstrates: 'bg-white/5 text-gray-400 border-white/10',
  application: 'bg-plexus-violet/20 text-plexus-violet border-plexus-violet/30',
}

// Accent colors per layer for the stack diagram (full class names so Tailwind keeps them)
const LAYER_ACCENTS: Record<string, { border: string; cell: string }> = {
  experiences: {
    border: 'border-plexus-cyan',
    cell: 'border-plexus-cyan/30 text-plexus-cyan hover:bg-plexus-cyan/10',
  },
  'agent-intelligence': {
    border: 'border-plexus-purple',
    cell: 'border-plexus-purple/30 text-plexus-purple hover:bg-plexus-purple/10',
  },
  connectivity: {
    border: 'border-plexus-pink',
    cell: 'border-plexus-pink/30 text-plexus-pink hover:bg-plexus-pink/10',
  },
  trust: {
    border: 'border-plexus-violet',
    cell: 'border-plexus-violet/30 text-plexus-violet hover:bg-plexus-violet/10',
  },
  operations: {
    border: 'border-plexus-cyan',
    cell: 'border-plexus-cyan/30 text-plexus-cyan hover:bg-plexus-cyan/10',
  },
  foundations: {
    border: 'border-plexus-purple',
    cell: 'border-plexus-purple/30 text-plexus-purple hover:bg-plexus-purple/10',
  },
}

function sortImplementations(implementations: Implementation[]): Implementation[] {
  return [...implementations].sort(
    (a, b) => ROLE_ORDER.indexOf(a.role) - ROLE_ORDER.indexOf(b.role)
  )
}

export function PlatformPage() {
  const [stack, setStack] = useState<CapabilityStack | null>(null)
  const [productsBySlug, setProductsBySlug] = useState<Record<string, Product>>({})
  const [error, setError] = useState(false)
  const { hash } = useLocation()

  useEffect(() => {
    Promise.all([
      fetch('/data/plexusone-capability-stack.json').then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      }),
      fetch('/data/products.json').then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      }),
    ])
      .then(([stackData, productsData]: [CapabilityStack, { products: Product[] }]) => {
        setStack(stackData)
        setProductsBySlug(
          Object.fromEntries(productsData.products.map((p) => [p.slug, p]))
        )
      })
      .catch(() => setError(true))
  }, [])

  // Data loads async, so re-run anchor scrolling once the stack renders
  useEffect(() => {
    if (stack && hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [stack, hash])

  if (error) {
    return (
      <div className="pt-32 pb-16 px-4 text-center">
        <p className="text-gray-300">
          Failed to load the platform capability data. Please try again later.
        </p>
      </div>
    )
  }

  if (!stack) {
    return (
      <div className="pt-32 pb-16 px-4 text-center" aria-busy="true">
        <p className="text-gray-400">Loading the platform map…</p>
      </div>
    )
  }

  const layers = [...stack.layers].sort((a, b) => a.order - b.order)

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">The </span>
            <span className="gradient-text">Platform</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six capability layers, from human interfaces down to shared foundations. Every
            capability maps to the open source projects that implement it.
          </p>
        </div>

        {/* Platform stack diagram — rendered from the capability stack, every box is a jump link */}
        <nav className="mb-4" aria-label="Platform capability stack diagram">
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="px-4 py-3 bg-gradient-to-r from-plexus-cyan/15 to-plexus-purple/15 border-b border-white/10 text-center">
              <span className="text-sm font-semibold text-white tracking-wide">
                Your AI-Native Applications
              </span>
            </div>

            {layers.map((layer) => {
              const accent = LAYER_ACCENTS[layer.id] ?? LAYER_ACCENTS.foundations
              return (
                <div
                  key={layer.id}
                  className="flex flex-col md:flex-row border-b border-white/5"
                >
                  <a
                    href={`#${layer.id}`}
                    className={`md:w-52 shrink-0 px-4 py-3 flex items-center font-bold text-white bg-plexus-slate/50 border-l-4 ${accent.border} hover:bg-plexus-slate/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-plexus-purple`}
                  >
                    {layer.name}
                  </a>
                  <div className="flex flex-wrap gap-1.5 px-4 py-3 flex-1 items-center bg-plexus-slate/20">
                    {layer.capabilities.map((capability) => (
                      <a
                        key={capability.id}
                        href={`#${capability.id}`}
                        className={`px-2.5 py-1 rounded-md border text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple ${accent.cell}`}
                      >
                        {capability.name}
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}

            <div className="px-4 py-3 bg-plexus-dark/60 text-center">
              <span className="text-sm text-gray-400 tracking-wide">
                Go &nbsp;·&nbsp; OpenTelemetry &nbsp;·&nbsp; Kubernetes &nbsp;·&nbsp; OpenAI, Anthropic,
                Google, AWS, Twilio, LiveKit &amp; 10+ more providers
              </span>
            </div>
          </div>
        </nav>
        <p className="text-center text-gray-500 text-sm mb-16">
          Click any layer or capability to jump to its details below.
        </p>

        <div className="space-y-16">
          {layers.map((layer) => (
            <section key={layer.id} id={layer.id} className="scroll-mt-24" aria-label={layer.name}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">
                  <span className="gradient-text">{layer.name}</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  {layer.description ?? layer.outcome}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {layer.capabilities.map((capability) => (
                  <div
                    key={capability.id}
                    id={capability.id}
                    className="scroll-mt-24 p-5 rounded-xl bg-plexus-slate/30 border border-white/5 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-1 group">
                      <h3 className="text-lg font-bold text-white">{capability.name}</h3>
                      <a
                        href={`#${capability.id}`}
                        className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 text-gray-500 hover:text-plexus-cyan transition-opacity focus-visible:outline-none"
                        aria-label={`Link to ${capability.name}`}
                      >
                        <LinkIcon size={16} aria-hidden="true" />
                      </a>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{capability.description}</p>

                    <ul className="flex flex-wrap gap-1.5 mt-auto" aria-label={`Projects implementing ${capability.name}`}>
                      {sortImplementations(capability.implementations).map((impl) => {
                        const product = productsBySlug[impl.project]
                        const label = product?.name ?? impl.project
                        const badgeClass =
                          ROLE_BADGE_CLASSES[impl.role] ?? ROLE_BADGE_CLASSES.supports
                        const chipClass = `inline-flex items-center gap-1 px-2 py-1 rounded-md border text-xs hover:brightness-125 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple ${badgeClass}`
                        const roleLabel = ROLE_LABELS[impl.role] ?? impl.role
                        return (
                          <li key={`${impl.project}-${impl.role}`}>
                            {product ? (
                              <Link
                                to={`${CATEGORY_PATHS[product.category] ?? '/products'}/${product.slug}`}
                                title={product.tagline}
                                className={chipClass}
                              >
                                <span className="font-medium">{label}</span>
                                <span className="opacity-70">{roleLabel}</span>
                              </Link>
                            ) : (
                              <a
                                href={`https://github.com/plexusone/${impl.project}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={chipClass}
                              >
                                <span className="font-medium">{label}</span>
                                <span className="opacity-70">{roleLabel}</span>
                              </a>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-300 mb-6">
            Every project above is open source and listed in the full catalog.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-plexus-cyan to-plexus-purple text-white font-semibold hover:opacity-90 focus-visible:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple focus-visible:ring-offset-2 focus-visible:ring-offset-plexus-dark"
            >
              Browse All Projects
            </Link>
            <a
              href="https://github.com/plexusone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 focus-visible:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple focus-visible:ring-offset-2 focus-visible:ring-offset-plexus-dark"
              aria-label="View PlexusOne on GitHub (opens in new tab)"
            >
              <Github size={18} aria-hidden="true" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
