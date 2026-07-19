import { useNavigate } from 'react-router-dom'

// Hexagonal hub-and-spoke marketecture: OmniAgent at the center, the six
// capability domains arranged around it, infrastructure and providers as the
// substrate. Each domain node links through to its section on /platform.
//
// Geometry: center at (500, 360), domain nodes on a ring of radius 248 at
// hexagon angles (pointy-top: 90/30/-30/-90/210/150 degrees).

interface DomainNode {
  id: string
  name: string
  products: string
  cx: number
  cy: number
  color: string
}

const CX = 500
const CY = 360

// Domain colors mirror LAYER_ACCENTS / the design system.
const NODES: DomainNode[] = [
  { id: 'experiences', name: 'Experiences', products: 'OmniChat · OmniVoice · Tavus', cx: 500, cy: 112, color: '#06b6d4' },
  { id: 'agent-intelligence', name: 'Agent Intelligence', products: 'OmniLLM · OmniMemory · OmniSkill', cx: 715, cy: 236, color: '#8b5cf6' },
  { id: 'connectivity', name: 'Connectivity', products: 'OmniSERP · W3Pilot · MCP', cx: 715, cy: 484, color: '#ec4899' },
  { id: 'trust', name: 'Trust', products: 'OmniVault · AgentAuth · Posture', cx: 500, cy: 608, color: '#a855f7' },
  { id: 'operations', name: 'Operations', products: 'OmniObserve · OmniDeploy · AgentKit', cx: 285, cy: 484, color: '#06b6d4' },
  { id: 'foundations', name: 'Foundations', products: 'Specs · Design System · Go SDKs', cx: 285, cy: 236, color: '#8b5cf6' },
]

const NODE_W = 228
const NODE_H = 78

// Pointy-top hexagon for the center hub, radius 96 around (CX, CY).
const HEX_R = 96
const hexPoints = [90, 150, 210, 270, 330, 30]
  .map((deg) => {
    const rad = (deg * Math.PI) / 180
    return `${(CX + HEX_R * Math.cos(rad)).toFixed(1)},${(CY - HEX_R * Math.sin(rad)).toFixed(1)}`
  })
  .join(' ')

export function PlatformDiagram() {
  const navigate = useNavigate()
  const go = (id: string) => navigate(`/platform#${id}`)

  return (
    <div className="hidden sm:block max-w-4xl mx-auto mb-16" aria-hidden="false">
      <svg
        viewBox="0 0 1000 760"
        className="w-full h-auto"
        role="group"
        aria-label="PlexusOne platform architecture: OmniAgent at the center, surrounded by six capability domains and built on a Go and provider substrate. Each domain links to the platform map."
      >
        <style>{`
          .p1n { cursor: pointer; }
          .p1n rect { transition: filter .2s ease, stroke-width .2s ease; }
          .p1n:hover rect, .p1n:focus-visible rect { filter: brightness(1.35); stroke-width: 2.5px; }
          .p1n:focus-visible { outline: none; }
        `}</style>

        <defs>
          <linearGradient id="p1-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#06b6d4" />
            <stop offset="0.5" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Connector spokes from the hub to each domain (drawn first, covered by hub + nodes) */}
        {NODES.map((n) => (
          <line
            key={`spoke-${n.id}`}
            x1={CX}
            y1={CY}
            x2={n.cx}
            y2={n.cy}
            stroke={n.color}
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
        ))}

        {/* Center hub: OmniAgent */}
        <polygon points={hexPoints} fill="url(#p1-hub)" fillOpacity="0.18" stroke="url(#p1-hub)" strokeWidth="2" />
        <text x={CX} y={CY - 4} textAnchor="middle" fontSize="21" fontWeight="700" fill="#f1f5f9">
          OmniAgent
        </text>
        <text x={CX} y={CY + 20} textAnchor="middle" fontSize="12" fill="#94a3b8">
          Your Agent Runtime
        </text>

        {/* Domain nodes */}
        {NODES.map((n) => (
          <g
            key={n.id}
            className="p1n"
            role="link"
            tabIndex={0}
            aria-label={`${n.name}: ${n.products}. View on the platform map.`}
            onClick={() => go(n.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                go(n.id)
              }
            }}
          >
            <rect
              x={n.cx - NODE_W / 2}
              y={n.cy - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx="12"
              fill="#1e293b"
              stroke={n.color}
              strokeWidth="1.5"
            />
            <text x={n.cx} y={n.cy - 8} textAnchor="middle" fontSize="15" fontWeight="700" fill={n.color}>
              {n.name}
            </text>
            <text x={n.cx} y={n.cy + 15} textAnchor="middle" fontSize="10.5" fill="#cbd5e1">
              {n.products}
            </text>
          </g>
        ))}

        {/* Substrate */}
        <rect x="181" y="688" width="638" height="48" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <text x={CX} y="716" textAnchor="middle" fontSize="12.5" fill="#94a3b8">
          Go · OpenTelemetry · Kubernetes · 15+ AI &amp; cloud providers
        </text>
      </svg>
    </div>
  )
}
