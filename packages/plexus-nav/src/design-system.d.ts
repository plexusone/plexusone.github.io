/**
 * Type declarations for @plexusone/design-system
 *
 * These types match the design-system-spec JSON schema.
 */

declare module '@plexusone/design-system' {
  export interface DesignSystemMeta {
    name: string;
    version: string;
    description: string;
    repository: string;
    documentation: string;
  }

  export interface ColorToken {
    id: string;
    value: string;
    semantic: string;
    usage: string;
  }

  export interface FontFamily {
    id: string;
    value: string;
    usage: string;
  }

  export interface ScaleToken {
    id: string;
    value: string | number;
  }

  export interface Typography {
    fontFamilies: FontFamily[];
    fontSizes: ScaleToken[];
    fontWeights: ScaleToken[];
    lineHeights: ScaleToken[];
  }

  export interface Spacing {
    baseUnit: string;
    scale: ScaleToken[];
  }

  export interface Foundations {
    colors: ColorToken[];
    typography: Typography;
    spacing: Spacing;
    borderRadius: ScaleToken[];
  }

  export interface LogoVariant {
    svg: string;
    usage: string;
  }

  export interface Logo {
    description: string;
    variants?: Record<string, LogoVariant>;
    svg?: string;
    favicon?: string;
    design?: {
      background: string;
      foreground: string;
      cornerRadius: string;
    };
    minWidth?: string;
    clearSpace?: string;
  }

  export interface NavItem {
    id: string;
    label: string;
    href: string;
    description?: string;
    icon?: string;
    external?: boolean;
  }

  export interface NavDropdown {
    id: string;
    label: string;
    items: NavItem[];
  }

  export interface BrandNavigation {
    brand: {
      name: string;
      href: string;
    };
    baseUrl: string;
    links: NavItem[];
    dropdowns: NavDropdown[];
    actions: NavItem[];
  }

  export interface BrandIdentity {
    name: string;
    tagline: string;
    mission: string;
    domain: string;
    social: Record<string, string>;
  }

  export interface ColorCombination {
    name: string;
    description: string;
    background: string;
    text: string;
    accent: string;
  }

  export interface Brand {
    identity: BrandIdentity;
    logos: {
      primary: Logo;
      icon: Logo;
    };
    navigation: BrandNavigation;
    colorCombinations: ColorCombination[];
  }

  export interface Profile {
    description: string;
    inherits?: string;
    css?: {
      prefix: string;
      selector: string;
    };
    colorOverrides?: Array<{
      tokenId: string;
      value: string;
    }>;
    additionalColors?: ColorToken[];
    additionalTypography?: Partial<Typography>;
  }

  export interface OutputConfig {
    css: {
      prefix: string;
      selector: string;
      mappings: Record<string, string>;
    };
  }

  export interface DesignSystem {
    $schema: string;
    meta: DesignSystemMeta;
    foundations: Foundations;
    brand: Brand;
    profiles: Record<string, Profile>;
    output: OutputConfig;
  }

  const designSystem: DesignSystem;
  export default designSystem;
}
