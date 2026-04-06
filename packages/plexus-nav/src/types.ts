/**
 * PlexusOne Navigation Types
 */

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
  /** Base URL for all navigation links. Default: 'https://plexusone.dev' */
  baseUrl?: string;
  /** URL to fetch products.json from. Default: baseUrl + '/data/products.json' */
  productsUrl?: string;
  /** Highlight the currently active product by slug */
  currentProduct?: string;
}
