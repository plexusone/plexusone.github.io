/**
 * PlexusOne Navigation Component
 * Main navigation component with mega menu, dropdowns, and mobile menu
 */

import { LitElement, html, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { navStyles } from './styles/nav.styles.js';
import { chevronIcon, githubIcon, hamburgerIcon, closeIcon, rssIcon } from './icons.js';
import { DEFAULT_BASE_URL, GITHUB_URL } from './constants.js';
import type { ProductsData, PlexusNavConfig } from './types.js';
import './plexus-mega-menu.js';
import './plexus-mobile-menu.js';

type DropdownName = 'developers' | 'community' | null;

@customElement('plexus-nav')
export class PlexusNav extends LitElement {
  static override styles = navStyles;

  @property({ type: Object })
  config: PlexusNavConfig = {};

  @state() private _data: ProductsData | null = null;
  @state() private _megaMenuOpen = false;
  @state() private _mobileMenuOpen = false;
  @state() private _activeDropdown: DropdownName = null;

  @query('.nav-mobile-toggle') private _mobileToggle!: HTMLButtonElement;
  @query('.megamenu-trigger') private _megaMenuTrigger!: HTMLButtonElement;
  @query('[data-dropdown="developers"]') private _developersDropdown!: HTMLDivElement;
  @query('[data-dropdown="community"]') private _communityDropdown!: HTMLDivElement;

  private _baseUrl = DEFAULT_BASE_URL;
  private _boundHandleKeydown: (e: KeyboardEvent) => void;
  private _boundHandleClickOutside: (e: MouseEvent) => void;

  constructor() {
    super();
    this._boundHandleKeydown = this._handleKeydown.bind(this);
    this._boundHandleClickOutside = this._handleClickOutside.bind(this);
  }

  override connectedCallback() {
    super.connectedCallback();
    this._baseUrl = this.config.baseUrl ?? DEFAULT_BASE_URL;
    this._fetchProducts();
    document.addEventListener('keydown', this._boundHandleKeydown);
    document.addEventListener('mousedown', this._boundHandleClickOutside);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._boundHandleKeydown);
    document.removeEventListener('mousedown', this._boundHandleClickOutside);
  }

  private async _fetchProducts() {
    const url = this.config.productsUrl ?? `${this._baseUrl}/data/products.json`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      this._data = await res.json();
    } catch (e) {
      console.warn('PlexusNav: Failed to load products.json', e);
    }
  }

  private _handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      if (this._activeDropdown) {
        this._activeDropdown = null;
      } else if (this._megaMenuOpen) {
        this._megaMenuOpen = false;
        this._megaMenuTrigger?.focus();
      } else if (this._mobileMenuOpen) {
        this._mobileMenuOpen = false;
        this._mobileToggle?.focus();
      }
    }
  }

  private _handleClickOutside(e: MouseEvent) {
    const target = e.target as Node;

    // Check if click is outside dropdowns
    if (this._activeDropdown) {
      const dropdownEl =
        this._activeDropdown === 'developers'
          ? this._developersDropdown
          : this._communityDropdown;
      if (dropdownEl && !dropdownEl.contains(target)) {
        this._activeDropdown = null;
      }
    }
  }

  private _toggleMegaMenu() {
    this._activeDropdown = null;
    this._megaMenuOpen = !this._megaMenuOpen;
  }

  private _toggleDropdown(name: DropdownName) {
    this._megaMenuOpen = false;
    this._activeDropdown = this._activeDropdown === name ? null : name;
  }

  private _toggleMobileMenu() {
    this._mobileMenuOpen = !this._mobileMenuOpen;
  }

  private _closeMegaMenu() {
    this._megaMenuOpen = false;
  }

  private _closeMobileMenu() {
    this._mobileMenuOpen = false;
  }

  private _closeDropdowns() {
    this._activeDropdown = null;
  }

  override render() {
    return html`
      <nav class="nav" aria-label="PlexusOne main navigation">
        <a href="#main-content" class="skip-link">Skip to main content</a>

        <div class="nav-container">
          ${this._renderBrand()}
          ${this._renderDesktopLinks()}
          ${this._renderMobileToggle()}
        </div>

        <plexus-mega-menu
          ?open=${this._megaMenuOpen}
          .data=${this._data}
          .baseUrl=${this._baseUrl}
          @close=${this._closeMegaMenu}
        ></plexus-mega-menu>

        <plexus-mobile-menu
          ?open=${this._mobileMenuOpen}
          .data=${this._data}
          .baseUrl=${this._baseUrl}
          @close=${this._closeMobileMenu}
        ></plexus-mobile-menu>
      </nav>
    `;
  }

  private _renderBrand() {
    return html`
      <a href="${this._baseUrl}/" class="nav-brand">
        <img src="${this._baseUrl}/icon.png" alt="PlexusOne" class="nav-logo" />
        <span class="nav-title">
          <span class="gradient-text">Plexus</span><span class="nav-title-light">One</span>
        </span>
      </a>
    `;
  }

  private _renderDesktopLinks() {
    return html`
      <div class="nav-links">
        <!-- Products mega menu trigger -->
        <button
          class="nav-link megamenu-trigger"
          aria-expanded=${this._megaMenuOpen}
          aria-haspopup="true"
          @click=${this._toggleMegaMenu}
        >
          Products ${chevronIcon}
        </button>

        <!-- Projects link -->
        <a href="${this._baseUrl}/projects" class="nav-link">Projects</a>

        <!-- Developers dropdown -->
        ${this._renderDropdown('developers', 'Developers', [
          { label: 'Academy', url: `${this._baseUrl}/academy` },
          { label: 'MCP', url: `${this._baseUrl}/mcp` },
          { label: 'Tools', url: `${this._baseUrl}/tools/` },
        ])}

        <!-- Community dropdown -->
        ${this._renderDropdown(
          'community',
          'Community',
          [
            { label: 'Blog', url: `${this._baseUrl}/blog` },
            { label: 'Releases', url: `${this._baseUrl}/releases` },
            { label: 'Philosophy', url: `${this._baseUrl}/#philosophy` },
          ],
          [
            {
              label: 'RSS Feed',
              url: `${this._baseUrl}/blog/atom.xml`,
              external: true,
              icon: rssIcon,
            },
          ]
        )}

        <!-- GitHub button -->
        <a
          href="${GITHUB_URL}"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-github"
        >
          ${githubIcon} GitHub
        </a>
      </div>
    `;
  }

  private _renderDropdown(
    name: DropdownName,
    label: string,
    items: Array<{ label: string; url: string }>,
    extraItems?: Array<{ label: string; url: string; external?: boolean; icon?: unknown }>
  ) {
    const isOpen = this._activeDropdown === name;

    return html`
      <div class="nav-dropdown ${isOpen ? 'open' : ''}" data-dropdown=${name}>
        <button
          class="nav-link"
          aria-expanded=${isOpen}
          aria-haspopup="true"
          @click=${() => this._toggleDropdown(name)}
        >
          ${label} ${chevronIcon}
        </button>
        <div class="nav-dropdown-menu">
          ${items.map(
            (item) => html`
              <a
                href=${item.url}
                class="nav-dropdown-item"
                @click=${this._closeDropdowns}
              >
                ${item.label}
              </a>
            `
          )}
          ${extraItems
            ? html`
                <div class="nav-dropdown-divider"></div>
                ${extraItems.map(
                  (item) => html`
                    <a
                      href=${item.url}
                      class="nav-dropdown-item"
                      target=${item.external ? '_blank' : nothing}
                      rel=${item.external ? 'noopener noreferrer' : nothing}
                      @click=${this._closeDropdowns}
                    >
                      ${item.icon} ${item.label}
                    </a>
                  `
                )}
              `
            : nothing}
        </div>
      </div>
    `;
  }

  private _renderMobileToggle() {
    return html`
      <button
        class="nav-mobile-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded=${this._mobileMenuOpen}
        aria-controls="mobile-menu"
        @click=${this._toggleMobileMenu}
      >
        ${hamburgerIcon} ${closeIcon}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'plexus-nav': PlexusNav;
  }
}
