/**
 * PlexusOne Mobile Menu Styles
 */

import { css } from 'lit';
import { sharedStyles } from './shared.styles.js';

export const mobileMenuStyles = [
  ...sharedStyles,
  css`
    :host {
      display: none;
    }

    :host([open]) {
      display: block;
    }

    @media (min-width: 769px) {
      :host {
        display: none !important;
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .mobile-menu {
      padding: 1rem;
      border-top: 1px solid var(--border-light);
      background: var(--plexus-dark-80);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .mobile-section {
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border-lighter);
    }

    .mobile-section:last-child {
      border-bottom: none;
    }

    .mobile-label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-subtle);
      margin-bottom: 8px;
    }

    .mobile-link {
      display: block;
      padding: 8px 0;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.15s ease;
      border-radius: 4px;
    }

    .mobile-link:hover {
      color: var(--plexus-cyan);
    }

    .mobile-link:focus-visible {
      outline: 2px solid var(--plexus-purple);
      outline-offset: 2px;
    }

    .mobile-link-github {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--plexus-purple-light);
    }

    .mobile-link-rss {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
  `,
];
