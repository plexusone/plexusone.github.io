/**
 * PlexusOne Navigation Shared Styles
 * Colors, typography, and common utilities
 */

import { css } from 'lit';

export const colors = css`
  :host {
    /* Brand colors */
    --plexus-cyan: #06b6d4;
    --plexus-cyan-light: #22d3ee;
    --plexus-purple: #8b5cf6;
    --plexus-purple-light: #a78bfa;
    --plexus-pink: #ec4899;
    --plexus-dark: rgba(10, 14, 26, 1);
    --plexus-dark-80: rgba(10, 14, 26, 0.8);
    --plexus-dark-95: rgba(10, 14, 26, 0.95);
    --plexus-dark-98: rgba(10, 15, 28, 0.98);

    /* Text colors */
    --text-primary: #ffffff;
    --text-secondary: #d1d5db;
    --text-muted: #9ca3af;
    --text-subtle: #6b7280;
    --text-dim: #4b5563;

    /* Border colors */
    --border-light: rgba(255, 255, 255, 0.1);
    --border-lighter: rgba(255, 255, 255, 0.05);

    /* Shadows */
    --shadow-dropdown: 0 10px 40px rgba(0, 0, 0, 0.3);
    --shadow-mega: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }
`;

export const typography = css`
  :host {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--plexus-cyan), var(--plexus-purple), var(--plexus-pink));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const transitions = css`
  .transition-colors {
    transition: color 0.15s ease;
  }

  .transition-all {
    transition: all 0.15s ease;
  }

  .transition-transform {
    transition: transform 0.2s ease;
  }
`;

export const focusStyles = css`
  .focus-ring:focus-visible {
    outline: 2px solid var(--plexus-purple);
    outline-offset: 2px;
  }
`;

export const sharedStyles = [colors, typography, transitions, focusStyles];
