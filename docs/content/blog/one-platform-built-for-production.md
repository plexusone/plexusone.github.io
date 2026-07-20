# One Platform, Built for Production: Reintroducing PlexusOne

Today we're rolling out a new way to understand PlexusOne. Not a new product—a new answer to the question visitors actually ask:

> "What is PlexusOne?"

For a long time, our homepage answered a different question: "What repositories do we have?" That was fine when there were ten of them. It stopped being fine somewhere around repository fifty. As of this writing, the PlexusOne organization has shipped **449 releases across 93 public repositories**—and a list of repositories, however long, doesn't explain what they add up to.

Here's the answer we should have been giving all along:

> **PlexusOne is a production-grade Go platform for building AI-native software.** The repositories are the modular components that make up that platform.

## From Catalog to Capabilities

Repositories are how GitHub organizes software. They are not how platforms are understood. Nobody adopts "124 repositories"—they adopt the ability to do something.

So the site is now organized around **six capability domains**:

- **Experiences** — Chat, voice, meetings, and avatar interfaces that connect humans with agents
- **Agent Intelligence** — Build, orchestrate, and evaluate intelligent agents and multi-agent systems
- **Connectivity** — Connect agents to models, tools, data sources, and the web
- **Trust** — Identity, secrets, and security for agents and the workloads they run on
- **Operations** — Observe, deploy, and operate AI systems reliably in production
- **Foundations** — Open specifications, design systems, and canonical Go SDKs shared across the platform

![The PlexusOne Platform Capability Stack: your applications on top, six capability layers, and the Go/provider substrate beneath](/img/plexusone-capability-stack.svg)

Every project has a home in one or more of these domains. `omnivoice` and `omni-deepgram` aren't two unrelated repos—they're the primary implementation and a provider adapter for the same capability: voice interaction. `multi-agent-spec`, `omniagent`, and `assistantkit` aren't three projects—they're the specification, runtime, and tooling for multi-agent systems.

Projects become evidence. Capabilities are the story.

## Built for Production

The most important change is a change in framing, and it's worth stating plainly.

PlexusOne is not a collection of experiments. It is the infrastructure behind real products. We are **Customer Zero**: every library, specification, web component, and service in the platform exists because it powers software we run in production ourselves. Our products are the proving ground—when a capability survives real-world use, it becomes a reusable component of the platform.

This creates a compounding engineering model:

1. We identify a capability our products need
2. We build it into the platform
3. Our products run it in production
4. External developers adopt it
5. Feedback refines the capability
6. The platform improves for everyone

Notice what isn't in that loop: there is no branch that says "customer requested a feature → immediately implement it." Every request passes through the same filter: *does this make PlexusOne a better platform for building production AI-native software?* The platform has a point of view. Customers can influence it—they don't define it.

The full philosophy now lives at [plexusone.dev/why](https://plexusone.dev/why).

## SDKs Where the Ecosystem Needs Them

One pattern deserves its own mention, because it explains a large fraction of those 93 repositories.

Many emerging AI providers ship a REST API and a Python or TypeScript demo—but no stable, versioned, idiomatic Go library. When our platform depends on such a service, we build the canonical Go implementation: broad API coverage, semantic versioning, documentation, and active maintenance. That's how [`elevenlabs-go`](https://github.com/plexusone/elevenlabs-go), [`opik-go`](https://github.com/plexusone/opik-go), [`tavus-go`](https://github.com/plexusone/tavus-go), and others came to exist.

When providers publish official Go SDKs that meet our standards, we prefer to adopt them rather than compete with them. Stable Omni interfaces insulate everything above the provider layer, so swapping an adapter changes nothing in your application. The goal isn't SDK ownership—it's that every capability in the platform always has a production-quality Go implementation available.

## What Changed on the Site

- **A new homepage** that leads with the six capability domains instead of a product list
- **A complete product catalog** — the site now indexes the full public ecosystem, not just a curated subset
- **[Why PlexusOne?](https://plexusone.dev/why)** — the platform philosophy in one page
- **Live ecosystem metrics** computed from the [release log](https://plexusone.dev/releases), so the numbers on the site are always the real numbers

## What's Next

The capability model on the site today is the seed of something more rigorous: a machine-readable capability stack that maps every capability to the products, Go modules, specifications, and components that implement it—including lifecycle and maturity status. The website will render it; the platform will be described by it; and, in proper Customer Zero fashion, we'll be using our own specification work to do it.

One platform. Production-proven. Open source. [Explore it →](https://plexusone.dev/#platform)
