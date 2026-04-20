/**
 * PlexusOne Mobile Menu Component
 * Mobile collapsible menu with sections
 */

import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { mobileMenuStyles } from './styles/mobile-menu.styles.js';
import { githubIcon, rssIcon } from './icons.js';
import { CATEGORY_ORDER, CATEGORY_PATHS, GITHUB_URL } from './constants.js';
import type { ProductsData } from './types.js';

@customElement('plexus-mobile-menu')
export class PlexusMobileMenu extends LitElement {
  static override styles = mobileMenuStyles;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Object })
  data: ProductsData | null = null;

  @property({ type: String })
  baseUrl = 'https://plexusone.dev';

  private _handleLinkClick = () => {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  };

  override render() {
    if (!this.data) return nothing;

    return html`
      <div class="mobile-menu" role="navigation" aria-label="Mobile navigation">
        <!-- Products section -->
        <div class="mobile-section">
          <span class="mobile-label">Products</span>
          ${CATEGORY_ORDER.map((catKey) => {
            const category = this.data?.categories[catKey];
            if (!category) return nothing;
            const categoryUrl = `${this.baseUrl}${CATEGORY_PATHS[catKey]}`;
            return html`
              <a href=${categoryUrl} class="mobile-link" @click=${this._handleLinkClick}>
                ${category.label}
              </a>
            `;
          })}
          <a
            href="${this.baseUrl}/integrations"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            Integrations
          </a>
        </div>

        <!-- Projects section -->
        <div class="mobile-section">
          <a
            href="${this.baseUrl}/projects"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            Projects
          </a>
        </div>

        <!-- Developers section -->
        <div class="mobile-section">
          <span class="mobile-label">Developers</span>
          <a
            href="${this.baseUrl}/academy"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            Academy
          </a>
          <a
            href="${this.baseUrl}/mcp"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            MCP
          </a>
          <a
            href="${this.baseUrl}/tools/"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            Tools
          </a>
        </div>

        <!-- Community section -->
        <div class="mobile-section">
          <span class="mobile-label">Community</span>
          <a
            href="${this.baseUrl}/blog"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            Blog
          </a>
          <a
            href="${this.baseUrl}/releases"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            Releases
          </a>
          <a
            href="${this.baseUrl}/#philosophy"
            class="mobile-link"
            @click=${this._handleLinkClick}
          >
            Philosophy
          </a>
          <a
            href="${this.baseUrl}/blog/atom.xml"
            target="_blank"
            rel="noopener noreferrer"
            class="mobile-link mobile-link-rss"
          >
            ${rssIcon}
            RSS Feed
          </a>
        </div>

        <!-- GitHub section -->
        <div class="mobile-section">
          <a
            href="${GITHUB_URL}"
            target="_blank"
            rel="noopener noreferrer"
            class="mobile-link mobile-link-github"
          >
            ${githubIcon}
            GitHub
          </a>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'plexus-mobile-menu': PlexusMobileMenu;
  }
}
