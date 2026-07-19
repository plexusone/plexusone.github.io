import { Link } from 'react-router-dom'
import { Github, Factory, Compass, Package, ArrowRight } from 'lucide-react'

const developmentLoop = [
  'We identify a capability our products need',
  'We build it into the platform',
  'Our products run it in production',
  'External developers adopt it',
  'Feedback refines the capability',
  'The platform improves for everyone',
]

export function WhyPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Why </span>
            <span className="gradient-text">PlexusOne</span>
            <span className="text-white">?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern AI software requires dozens of disconnected SDKs, frameworks, orchestration
            systems, observability tools, communication APIs, and deployment platforms. PlexusOne
            unifies these capabilities into a cohesive, production-grade Go platform.
          </p>
        </div>

        {/* Built for production */}
        <section className="mb-16" aria-labelledby="built-for-production">
          <div className="flex items-center gap-3 mb-4">
            <Factory className="w-8 h-8 text-plexus-cyan" aria-hidden="true" />
            <h2 id="built-for-production" className="text-3xl font-bold text-white">
              Built for Production
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            PlexusOne is not a collection of experiments. It is the infrastructure behind real
            products. We are Customer Zero: every library, specification, web component, and
            service in the platform exists because it powers software we run in production
            ourselves. Our products are the proving ground—when a capability survives real-world
            use, it becomes a reusable component of the platform.
          </p>
          <p className="text-gray-300 mb-8">
            That creates a compounding engineering model. Each new application strengthens the
            platform, and each improvement to the platform makes the next application faster to
            build—for us and for you.
          </p>

          <div className="p-6 rounded-xl bg-plexus-slate/30 border border-white/5">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              The PlexusOne development loop
            </p>
            <ol className="space-y-3">
              {developmentLoop.map((step, index) => (
                <li key={step} className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-plexus-cyan to-plexus-purple text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="text-gray-400 text-sm mt-4">
              Notice what isn't in the loop: there is no branch that says "customer requested a
              feature → immediately implement it."
            </p>
          </div>
        </section>

        {/* A coherent point of view */}
        <section className="mb-16" aria-labelledby="point-of-view">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-8 h-8 text-plexus-purple" aria-hidden="true" />
            <h2 id="point-of-view" className="text-3xl font-bold text-white">
              A Coherent Point of View
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            PlexusOne is built around a clear architectural philosophy rather than an accumulation
            of requested features. External feedback is an important source of insight, but it is
            not the roadmap itself. Every request is evaluated through the same fundamental
            question:
          </p>
          <blockquote className="border-l-4 border-plexus-purple pl-6 py-2 mb-4">
            <p className="text-xl text-white font-semibold">
              Does this make PlexusOne a better platform for building production AI-native
              software?
            </p>
          </blockquote>
          <p className="text-gray-300 mb-4">
            If yes, we build the capability into the platform, because it benefits both our own
            products and the broader ecosystem. If no, we don't add it simply because it was
            requested. Capabilities that improve the platform become part of PlexusOne;
            application-specific functionality belongs in the applications built on top of it.
          </p>
          <p className="text-gray-300">
            The platform has a point of view. Customers can influence that point of view—they
            don't define it. That discipline keeps PlexusOne composable, maintainable, and
            predictable as it grows.
          </p>
        </section>

        {/* SDK strategy */}
        <section className="mb-16" aria-labelledby="sdk-strategy">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-8 h-8 text-plexus-pink" aria-hidden="true" />
            <h2 id="sdk-strategy" className="text-3xl font-bold text-white">
              SDKs Where the Ecosystem Needs Them
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            PlexusOne maintains production-quality Go SDKs where they are missing, to ensure the
            platform has first-class support for the services it depends on. Many emerging AI
            providers ship a REST API and a Python or TypeScript demo—but no stable, versioned,
            idiomatic Go library. We build the canonical Go implementation, with broad API
            coverage, semantic versioning, documentation, and active maintenance.
          </p>
          <p className="text-gray-300 mb-4">
            When providers publish official Go SDKs that meet our standards, we prefer to adopt
            them rather than compete with them. Stable Omni interfaces insulate higher-level
            platform capabilities from that choice: swap the provider adapter, and nothing above
            it changes.
          </p>
          <p className="text-gray-300">
            The goal isn't SDK ownership. It's platform reliability—for every capability, a
            production-quality Go implementation is always available.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xl text-gray-300 mb-8">
            One platform. Production-proven. Open source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/platform"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-plexus-cyan to-plexus-purple text-white font-semibold hover:opacity-90 focus-visible:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plexus-purple focus-visible:ring-offset-2 focus-visible:ring-offset-plexus-dark"
            >
              Explore the Platform
              <ArrowRight size={18} aria-hidden="true" />
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
