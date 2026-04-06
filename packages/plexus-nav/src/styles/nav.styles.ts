/**
 * PlexusOne Main Navigation Styles
 */

import { css } from 'lit';
import { sharedStyles } from './shared.styles.js';

export const navStyles = [
  ...sharedStyles,
  css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: var(--plexus-dark-80);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-light);
    }

    .nav-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Brand */
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      border-radius: 8px;
    }

    .nav-brand:focus-visible {
      outline: 2px solid var(--plexus-purple);
      outline-offset: 2px;
    }

    .nav-logo {
      width: 40px;
      height: 40px;
    }

    .nav-title {
      font-size: 20px;
      font-weight: 700;
    }

    .nav-title-light {
      color: var(--text-primary);
    }

    /* Desktop Links */
    .nav-links {
      display: none;
      align-items: center;
      gap: 2rem;
    }

    @media (min-width: 769px) {
      .nav-links {
        display: flex;
      }
    }

    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      padding: 8px 0;
      border: none;
      background: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: color 0.15s ease;
      border-radius: 4px;
    }

    .nav-link:hover,
    .nav-link[aria-expanded="true"],
    .nav-link.active {
      color: var(--plexus-cyan);
    }

    .nav-link:focus-visible {
      outline: 2px solid var(--plexus-purple);
      outline-offset: 2px;
    }

    .nav-link .icon-chevron {
      transition: transform 0.2s ease;
    }

    .nav-link[aria-expanded="true"] .icon-chevron {
      transform: rotate(180deg);
    }

    /* Dropdowns */
    .nav-dropdown {
      position: relative;
    }

    .nav-dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 0.5rem;
      min-width: 12rem;
      padding: 0.5rem 0;
      background: var(--plexus-dark-95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      box-shadow: var(--shadow-dropdown);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
    }

    .nav-dropdown.open .nav-dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .nav-dropdown-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 8px 16px;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.15s ease, background 0.15s ease;
    }

    .nav-dropdown-item:hover {
      color: var(--plexus-cyan);
      background: rgba(255, 255, 255, 0.05);
    }

    .nav-dropdown-divider {
      border-top: 1px solid var(--border-light);
      margin: 0.5rem 0;
    }

    /* GitHub Button */
    .nav-github {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(139, 92, 246, 0.2);
      border: 1px solid rgba(139, 92, 246, 0.5);
      border-radius: 8px;
      color: var(--plexus-purple-light);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.15s ease;
    }

    .nav-github:hover {
      background: rgba(139, 92, 246, 0.3);
    }

    .nav-github:focus-visible {
      outline: 2px solid var(--plexus-purple);
      outline-offset: 2px;
    }

    /* Mobile Toggle */
    .nav-mobile-toggle {
      display: flex;
      padding: 0.5rem;
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      border-radius: 8px;
    }

    .nav-mobile-toggle:focus-visible {
      outline: 2px solid var(--plexus-purple);
      outline-offset: 2px;
    }

    @media (min-width: 769px) {
      .nav-mobile-toggle {
        display: none;
      }
    }

    .nav-mobile-toggle .icon-close {
      display: none;
    }

    .nav-mobile-toggle[aria-expanded="true"] .icon-hamburger {
      display: none;
    }

    .nav-mobile-toggle[aria-expanded="true"] .icon-close {
      display: block;
    }

    /* Skip Link */
    .skip-link {
      position: absolute;
      top: -100%;
      left: 0;
      padding: 0.5rem 1rem;
      background: var(--plexus-purple);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
    }

    .skip-link:focus {
      top: 1rem;
      left: 1rem;
    }
  `,
];
