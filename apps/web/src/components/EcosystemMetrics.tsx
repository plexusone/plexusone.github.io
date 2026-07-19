import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface ReleaseStats {
  totalReleases: number
  totalRepos: number
  releasesByRepo: Record<string, number>
}

interface Metrics {
  repos: string
  releases: string
  providers: string
  specs: string
}

// Fallbacks match the release log as of 2026-07; live values are computed from
// /releases/plexusone-releases.json when it loads.
const FALLBACK: Metrics = {
  repos: '90+',
  releases: '440+',
  providers: '15+',
  specs: '8+',
}

export function EcosystemMetrics() {
  const [metrics, setMetrics] = useState<Metrics>(FALLBACK)

  useEffect(() => {
    fetch('/releases/plexusone-releases.json')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { stats?: ReleaseStats }) => {
        const stats = data.stats
        if (!stats?.releasesByRepo) return
        const repoNames = Object.keys(stats.releasesByRepo)
        const providers = repoNames.filter((r) => r.startsWith('plexusone/omni-')).length
        const specs = repoNames.filter((r) => r.endsWith('-spec')).length
        setMetrics({
          repos: String(stats.totalRepos),
          releases: String(stats.totalReleases),
          providers: String(providers),
          specs: String(specs),
        })
      })
      .catch(() => {
        // Keep fallback values; the strip is informational only.
      })
  }, [])

  const items = [
    { value: metrics.repos, label: 'Open Source Repositories' },
    { value: metrics.releases, label: 'Releases Shipped' },
    { value: metrics.providers, label: 'Provider Integrations' },
    { value: metrics.specs, label: 'Open Specifications' },
    { value: '100%', label: 'Go-First' },
  ]

  return (
    <section className="py-16 px-4 border-t border-white/5" role="region" aria-label="Ecosystem metrics">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{item.value}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-10">
          Every number above is a byproduct of one platform, built for production.{' '}
          <Link to="/releases" className="text-plexus-cyan hover:underline">
            See the release log →
          </Link>
        </p>
      </div>
    </section>
  )
}
