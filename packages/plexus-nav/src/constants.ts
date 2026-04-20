/**
 * PlexusOne Navigation Constants
 */

export const DEFAULT_BASE_URL = '';

export const CATEGORY_ORDER = ['library', 'agent', 'application', 'specification'] as const;

/** Category key to plural URL path */
export const CATEGORY_PATHS: Record<string, string> = {
  library: '/libraries',
  agent: '/agents',
  application: '/applications',
  specification: '/specifications',
};

/** Category path to singular key */
export const PATH_TO_CATEGORY: Record<string, string> = {
  '/libraries': 'library',
  '/agents': 'agent',
  '/applications': 'application',
  '/specifications': 'specification',
};

export const GITHUB_URL = 'https://github.com/plexusone';
