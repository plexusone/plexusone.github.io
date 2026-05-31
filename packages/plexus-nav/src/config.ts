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

// Product category configuration (specific to PlexusOne product structure)
export const CATEGORY_ORDER = ['library', 'agent', 'application', 'specification'] as const;

export const CATEGORY_PATHS: Record<string, string> = {
  library: '/libraries',
  agent: '/agents',
  application: '/applications',
  specification: '/specifications',
};

export type ProductCategory = 'library' | 'agent' | 'application' | 'specification';

export interface Product {
  name: string;
  slug: string;
  tagline: string;
  category: ProductCategory;
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
      html: `<img src="${baseUrl}/icon.png" alt="${BRAND_NAME}" style="height: 32px; width: 32px; margin-right: 8px;" /><span style="background: ${gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Plexus</span><span style="font-weight: 300;">One</span>`,
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
          { id: 'philosophy', label: 'Philosophy', href: '/#philosophy' },
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
      label: 'Products',
      categories: [],
      items: [],
      footerLinks: [
        { id: 'all-products', label: 'All Products', href: '/products' },
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
  const categories: MegaMenuCategory[] = CATEGORY_ORDER.map((catKey, index) => {
    const cat = data.categories[catKey];
    return {
      id: catKey,
      label: cat?.label || catKey,
      description: cat?.description || '',
      order: cat?.order ?? index,
      href: CATEGORY_PATHS[catKey],
    };
  });

  const items: MegaMenuItem[] = data.products.map((product) => ({
    id: product.slug,
    label: product.name,
    categoryId: product.category,
    tagline: product.tagline,
    featured: product.featured ?? false,
    href: product.docsUrl || `${CATEGORY_PATHS[product.category]}/${product.slug}`,
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
