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
 */

// Export components
export { PlexusNav } from './plexus-nav.js';
export { PlexusMegaMenu } from './plexus-mega-menu.js';
export { PlexusMobileMenu } from './plexus-mobile-menu.js';

// Export types
export type { Product, Category, ProductsData, PlexusNavConfig } from './types.js';

// Export constants
export { DEFAULT_BASE_URL, CATEGORY_ORDER, CATEGORY_PATHS, GITHUB_URL } from './constants.js';
