/**
 * PlexusOne Navigation Web Components
 *
 * This package wraps @grokify/site-nav with PlexusOne-specific configuration.
 *
 * Usage:
 *   <!-- ES Module (recommended) -->
 *   <script type="module">
 *     import '@plexusone/nav';
 *   </script>
 *   <plexus-nav></plexus-nav>
 *
 *   <!-- IIFE (standalone) -->
 *   <script src="https://plexusone.dev/js/plexus-nav.min.js"></script>
 *   <plexus-nav></plexus-nav>
 *
 *   <!-- With config -->
 *   <plexus-nav id="nav"></plexus-nav>
 *   <script>
 *     document.getElementById('nav').config = {
 *       baseUrl: 'https://plexusone.dev',
 *       currentProduct: 'omnillm'
 *     };
 *   </script>
 *
 *   <!-- Auto-initialization (backward compatible with MkDocs) -->
 *   <div id="plexus-nav-root"></div>
 *   <script src="https://plexusone.dev/js/plexus-nav.js"></script>
 *   <!-- Component auto-creates <plexus-nav> inside #plexus-nav-root -->
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// Import site-nav components (registers custom elements)
import '@grokify/site-nav';
import type { NavbarConfig } from '@grokify/site-nav';

// Import PlexusOne configuration utilities
import {
  createBaseConfig,
  mergeProductsIntoConfig,
  DEFAULT_BASE_URL,
  type PlexusNavConfig,
  type ProductsData,
} from './config.js';

// Re-export types for external use
export type { PlexusNavConfig, ProductsData, Product, Category } from './config.js';
export { DEFAULT_BASE_URL, GITHUB_URL, CATEGORY_PATHS } from './config.js';

/**
 * PlexusNav Component
 *
 * A thin wrapper around wt-navbar that:
 * 1. Provides PlexusOne branding and navigation structure
 * 2. Fetches products.json and converts to NavbarConfig
 * 3. Passes configuration to the underlying wt-navbar
 */
@customElement('plexus-nav')
export class PlexusNav extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  /**
   * PlexusOne-specific configuration
   */
  @property({ type: Object })
  config: PlexusNavConfig = {};

  /**
   * Internal NavbarConfig passed to wt-navbar
   */
  @state() private _navbarConfig: NavbarConfig | null = null;

  private _baseUrl = DEFAULT_BASE_URL;

  override connectedCallback() {
    super.connectedCallback();
    this._baseUrl = this.config.baseUrl ?? DEFAULT_BASE_URL;
    this._initConfig();
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('config')) {
      this._baseUrl = this.config.baseUrl ?? DEFAULT_BASE_URL;
      this._initConfig();
    }
  }

  private async _initConfig() {
    // Start with base config
    const baseConfig = createBaseConfig(this._baseUrl);
    this._navbarConfig = baseConfig;

    // Fetch products and merge into config
    try {
      const productsUrl = this.config.productsUrl ?? `${this._baseUrl}/data/products.json`;
      const res = await fetch(productsUrl);
      if (res.ok) {
        const data: ProductsData = await res.json();
        this._navbarConfig = mergeProductsIntoConfig(baseConfig, data, this._baseUrl);
      }
    } catch (e) {
      console.warn('PlexusNav: Failed to load products.json', e);
    }
  }

  override render() {
    if (!this._navbarConfig) {
      return html``;
    }

    return html`
      <wt-navbar
        .config=${this._navbarConfig}
        theme=${this.config.theme ?? 'dark'}
      ></wt-navbar>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'plexus-nav': PlexusNav;
  }
}

/**
 * Auto-initialization for backward compatibility with MkDocs sites.
 * If #plexus-nav-root exists and doesn't contain a <plexus-nav>, create one.
 */
function autoInit() {
  const root = document.getElementById('plexus-nav-root');
  if (root && !root.querySelector('plexus-nav')) {
    const nav = document.createElement('plexus-nav');
    root.appendChild(nav);
  }
}

// Run auto-init when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
}
