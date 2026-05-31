/**
 * Type declarations for @grokify/site-nav
 *
 * This file helps TypeScript resolve types when using file: protocol dependencies.
 */

declare module '@grokify/site-nav' {
  import { CSSResult } from 'lit';

  // Navbar types
  export interface MenuItem {
    id: string;
    label: string;
    href?: string;
    icon?: string;
    external?: boolean;
    disabled?: boolean;
  }

  export interface DropdownItem extends MenuItem {
    description?: string;
  }

  export interface DropdownMenu {
    id: string;
    label: string;
    items: DropdownItem[];
    extraItems?: DropdownItem[];
  }

  export interface MegaMenuCategory {
    id: string;
    label: string;
    description?: string;
    order?: number;
    href?: string;
  }

  export interface MegaMenuItem extends MenuItem {
    categoryId: string;
    tagline?: string;
    featured?: boolean;
  }

  export interface MegaMenuConfig {
    label: string;
    categories: MegaMenuCategory[];
    items: MegaMenuItem[];
    maxFeaturedPerCategory?: number;
    footerLinks?: MenuItem[];
    footerText?: string;
  }

  export interface MobileMenuSection {
    id: string;
    label?: string;
    items: MenuItem[];
  }

  export interface NavbarBrand {
    name: string;
    logoUrl?: string;
    logoAlt?: string;
    href?: string;
    html?: string;
  }

  export interface NavbarConfig {
    brand?: NavbarBrand;
    links?: MenuItem[];
    dropdowns?: DropdownMenu[];
    megaMenu?: MegaMenuConfig;
    mobileSections?: MobileMenuSection[];
    actions?: MenuItem[];
    baseUrl?: string;
  }

  export interface NavbarNavigateEventDetail {
    item: MenuItem;
    originalEvent: MouseEvent;
  }

  // Design system
  export function generateCSSVariables(theme: 'light' | 'dark'): CSSResult;
  export const themeCSS: CSSResult;

  // Components are registered as custom elements, no need to export classes
}
