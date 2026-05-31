/**
 * PlexusOne Navigation Configuration
 *
 * Converts PlexusOne products.json format to site-nav NavbarConfig.
 */

import type { NavbarConfig, MegaMenuCategory, MegaMenuItem } from '@grokify/site-nav';

export const DEFAULT_BASE_URL = '';
export const GITHUB_URL = 'https://github.com/plexusone';

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
 */
export function createBaseConfig(baseUrl: string): NavbarConfig {
  return {
    baseUrl,
    brand: {
      name: 'PlexusOne',
      html: `<img src="${baseUrl}/icon.png" alt="PlexusOne" style="height: 32px; width: 32px; margin-right: 8px;" /><span style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Plexus</span><span style="font-weight: 300;">One</span>`,
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
