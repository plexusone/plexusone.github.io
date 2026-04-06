# @plexusone/nav

PlexusOne unified navigation web component built with Lit.

## Installation

```bash
npm install @plexusone/nav
```

## Usage

### ES Module (Recommended)

```html
<script type="module">
  import '@plexusone/nav';
</script>
<plexus-nav></plexus-nav>
```

### Standalone (IIFE)

```html
<script src="https://plexusone.dev/js/plexus-nav.min.js"></script>
<plexus-nav></plexus-nav>
```

### With Configuration

```html
<plexus-nav id="nav"></plexus-nav>
<script>
  document.getElementById('nav').config = {
    baseUrl: 'https://plexusone.dev',
    productsUrl: 'https://plexusone.dev/data/products.json',
    currentProduct: 'omnillm'
  };
</script>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `baseUrl` | `string` | `'https://plexusone.dev'` | Base URL for navigation links |
| `productsUrl` | `string` | `baseUrl + '/data/products.json'` | URL to fetch products data |
| `currentProduct` | `string` | - | Highlight the currently active product |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

## Architecture

```
src/
├── index.ts              # Entry point, exports
├── plexus-nav.ts         # Main <plexus-nav> element
├── plexus-mega-menu.ts   # <plexus-mega-menu> sub-component
├── plexus-mobile-menu.ts # <plexus-mobile-menu> sub-component
├── types.ts              # TypeScript interfaces
├── constants.ts          # URLs, category mappings
├── icons.ts              # SVG icon templates
└── styles/
    ├── shared.styles.ts  # Colors, typography
    ├── nav.styles.ts     # Main navigation
    ├── mega-menu.styles.ts
    └── mobile-menu.styles.ts
```

## Build Output

| File | Format | Use Case |
|------|--------|----------|
| `dist/plexus-nav.js` | ES Module | npm import |
| `dist/plexus-nav.min.js` | IIFE | `<script>` tag |
| `dist/plexus-nav.d.ts` | TypeScript | Type definitions |

## License

MIT
