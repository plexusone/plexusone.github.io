/**
 * PlexusOne Navigation Configuration
 *
 * Integrates @plexusone/design-system with @grokify/site-nav.
 * Design tokens and brand identity come from the design system.
 */

import type { NavbarConfig, MegaMenuCategory, MegaMenuItem } from '@grokify/site-nav';
import designSystem from '@plexusone/design-system';
import type { ColorToken, DesignSystem } from '@plexusone/design-system';

// Re-export the design system for external use
export { designSystem };
export type { DesignSystem };

/**
 * Get a color value from the design system by ID
 */
export function getColor(id: string): string {
  const color = designSystem.foundations.colors.find((c: ColorToken) => c.id === id);
  return color?.value ?? '';
}

/**
 * Get all colors as a Record<id, value>
 */
export function getColorMap(): Record<string, string> {
  return Object.fromEntries(
    designSystem.foundations.colors.map((c: ColorToken) => [c.id, c.value])
  );
}

/**
 * Generate CSS custom properties from design system colors
 */
export function generateColorCSS(prefix: string = '--plexus'): string {
  return designSystem.foundations.colors
    .map((c: ColorToken) => `  ${prefix}-${c.id}: ${c.value};`)
    .join('\n');
}

/**
 * Generate full CSS custom properties block
 */
export function generateDesignSystemCSS(): string {
  const prefix = designSystem.output.css.prefix;
  const selector = designSystem.output.css.selector;

  const colorVars = designSystem.foundations.colors
    .map((c: ColorToken) => `  ${prefix}-${c.id}: ${c.value};`)
    .join('\n');

  const fontVars = designSystem.foundations.typography.fontFamilies
    .map((f) => `  ${prefix}-font-${f.id}: ${f.value};`)
    .join('\n');

  const fontSizeVars = designSystem.foundations.typography.fontSizes
    .map((s) => `  ${prefix}-text-${s.id}: ${s.value};`)
    .join('\n');

  const radiusVars = designSystem.foundations.borderRadius
    .map((r) => `  ${prefix}-radius-${r.id}: ${r.value};`)
    .join('\n');

  const spacingVars = designSystem.foundations.spacing.scale
    .map((s) => `  ${prefix}-space-${s.id}: ${s.value};`)
    .join('\n');

  return `${selector} {
  /* Colors */
${colorVars}

  /* Typography */
${fontVars}
${fontSizeVars}

  /* Border Radius */
${radiusVars}

  /* Spacing */
${spacingVars}
}`;
}

// Brand info from design system
export const BRAND_NAME = designSystem.brand.identity.name;
export const BRAND_DOMAIN = designSystem.brand.identity.domain;
export const GITHUB_URL = designSystem.brand.identity.social.github;

// Default base URL (empty for relative URLs, or use domain for absolute)
export const DEFAULT_BASE_URL = '';

// Product category configuration (product type: library, agent, ...).
// Category pages still exist; the mega menu groups by pillar instead.
export const CATEGORY_ORDER = ['library', 'agent', 'application', 'specification'] as const;

export const CATEGORY_PATHS: Record<string, string> = {
  library: '/libraries',
  agent: '/agents',
  application: '/applications',
  specification: '/specifications',
};

export type ProductCategory = 'library' | 'agent' | 'application' | 'specification';

// Platform pillars: the top-level structure of the site. Order follows the
// build -> run -> ship story, then the cross-cutting specs and workbench.
export const PILLARS = [
  { id: 'agents', label: 'Agents', description: 'AI agents and the Omni modules', href: '/agents' },
  { id: 'systems', label: 'Systems', description: 'SaaS backends with SystemForge', href: '/systems' },
  { id: 'operations', label: 'Operations', description: 'Release and pipeline automation', href: '/operations' },
  { id: 'specs', label: 'Specs', description: 'Open, machine-readable specs', href: '/specs' },
  { id: 'app', label: 'PlexusOne App', description: 'The agentic dev workbench', href: '/app' },
] as const;

export type PillarId = (typeof PILLARS)[number]['id'];

export interface Product {
  name: string;
  slug: string;
  tagline: string;
  category: ProductCategory;
  pillar?: PillarId;
  featured?: boolean;
  docsUrl?: string | null;
  githubUrl?: string;
}

export interface Category {
  label: string;
  description: string;
  order: number;
}

export interface ProductsData {
  version: string;
  lastUpdated: string;
  categories: Record<string, Category>;
  products: Product[];
  /** Per-pillar menu order: pillars[id].menu lists product slugs in display order */
  pillars?: Record<string, { menu?: string[] }>;
}

export interface PlexusNavConfig {
  /** Base URL for all navigation links. Default: '' */
  baseUrl?: string;
  /** URL to fetch products.json from. Default: baseUrl + '/data/products.json' */
  productsUrl?: string;
  /** Highlight the currently active product by slug */
  currentProduct?: string;
  /** Theme: light or dark */
  theme?: 'light' | 'dark';
}

/**
 * Creates the static NavbarConfig for PlexusOne (without products data)
 * Brand styling uses colors from the design system.
 */
export function createBaseConfig(baseUrl: string): NavbarConfig {
  const colors = getColorMap();

  // Build gradient from design system colors (cyan -> purple -> pink)
  const gradientColors = [colors.cyan, colors.purple, colors.pink].filter(Boolean);
  const gradient = `linear-gradient(135deg, ${gradientColors.join(', ')})`;

  return {
    baseUrl,
    brand: {
      name: BRAND_NAME,
      html: `<img src="${baseUrl}/icon.png" alt="${BRAND_NAME}" style="height: 32px; width: 32px; margin-right: 8px; vertical-align: bottom;" /><span style="background: ${gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; vertical-align: bottom;">Plexus</span><span style="font-weight: 300; vertical-align: bottom;">One</span>`,
      href: baseUrl || '/',
    },
    links: [
      { id: 'projects', label: 'Projects', href: '/projects' },
    ],
    dropdowns: [
      {
        id: 'developers',
        label: 'Developers',
        items: [
          { id: 'academy', label: 'Academy', href: '/academy' },
          { id: 'mcp', label: 'MCP', href: '/mcp' },
          { id: 'tools', label: 'Tools', href: '/tools/' },
        ],
      },
      {
        id: 'community',
        label: 'Community',
        items: [
          { id: 'blog', label: 'Blog', href: '/blog' },
          { id: 'releases', label: 'Releases', href: '/releases' },
          { id: 'why', label: 'Why PlexusOne?', href: '/why' },
        ],
        extraItems: [
          { id: 'rss', label: 'RSS Feed', href: '/blog/atom.xml', external: true },
        ],
      },
    ],
    actions: [
      { id: 'github', label: 'GitHub', href: GITHUB_URL, external: true },
    ],
    megaMenu: {
      label: 'Platform',
      categories: [],
      items: [],
      footerLinks: [
        { id: 'overview', label: 'Platform Overview', href: '/#pillars' },
        { id: 'all-projects', label: 'All Projects', href: '/projects' },
        { id: 'integrations', label: 'Integrations', href: '/integrations' },
        { id: 'github', label: 'GitHub', href: GITHUB_URL, external: true },
      ],
    },
  };
}

/**
 * Converts ProductsData to MegaMenu categories and items
 */
export function productsToMegaMenu(
  data: ProductsData,
  baseUrl: string
): { categories: MegaMenuCategory[]; items: MegaMenuItem[] } {
  const categories: MegaMenuCategory[] = PILLARS.map((pillar, index) => ({
    id: pillar.id,
    label: pillar.label,
    description: pillar.description,
    order: index + 1,
    href: pillar.href,
  }));

  // The catalog spans the full ecosystem (90+ entries); the mega menu shows
  // only featured products that belong to a pillar.
  const menuProducts = data.products.filter((p) => p.featured && p.pillar);
  const rank = (p: Product): number => {
    const menu = data.pillars?.[p.pillar as string]?.menu ?? [];
    const i = menu.indexOf(p.slug);
    return i === -1 ? menu.length : i;
  };
  menuProducts.sort((a, b) => rank(a) - rank(b));

  const items: MegaMenuItem[] = menuProducts.map((product) => ({
    id: product.slug,
    label: product.name,
    categoryId: product.pillar as string,
    tagline: product.tagline,
    featured: true,
    href: product.docsUrl || product.githubUrl || `${CATEGORY_PATHS[product.category]}/${product.slug}`,
  }));

  return { categories, items };
}

/**
 * Merges products data into base config
 */
export function mergeProductsIntoConfig(
  config: NavbarConfig,
  data: ProductsData,
  baseUrl: string
): NavbarConfig {
  const { categories, items } = productsToMegaMenu(data, baseUrl);

  return {
    ...config,
    megaMenu: {
      ...config.megaMenu!,
      categories,
      items,
    },
  };
}

/**
 * CSS custom properties for navbar theming
 * Uses colors from the design system
 */
export function getNavbarThemeCSS(): string {
  const colors = getColorMap();

  return `
:root {
  /* PlexusOne theme for wt-navbar */
  --lit-navbar-primary: ${colors.cyan};
  --lit-navbar-secondary: ${colors.purple};
  --lit-navbar-bg: ${colors.dark};
  --lit-navbar-bg-elevated: ${colors.navy || colors.slate};
  --lit-navbar-text: ${colors.text};
  --lit-navbar-text-muted: ${colors['text-muted']};
  --lit-navbar-border: rgba(255, 255, 255, 0.1);
  --lit-navbar-title-gradient: linear-gradient(135deg, ${colors.cyan}, ${colors.purple}, ${colors.pink});
}`;
}
