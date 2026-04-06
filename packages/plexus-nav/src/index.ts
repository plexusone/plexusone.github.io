/**
 * PlexusOne Navigation Web Components
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

// Export components
export { PlexusNav } from './plexus-nav.js';
export { PlexusMegaMenu } from './plexus-mega-menu.js';
export { PlexusMobileMenu } from './plexus-mobile-menu.js';

// Export types
export type { Product, Category, ProductsData, PlexusNavConfig } from './types.js';

// Export constants
export { DEFAULT_BASE_URL, CATEGORY_ORDER, CATEGORY_PATHS, GITHUB_URL } from './constants.js';

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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoInit);
} else {
  autoInit();
}
