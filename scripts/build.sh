#!/bin/bash
#
# Build script for PlexusOne website
#
# This script builds all dependencies in order and outputs the static site to docs/
#
# Usage:
#   ./scripts/build.sh           # Full build (local dev - builds site-nav from source)
#   ./scripts/build.sh --npm     # Full build (production - uses npm packages)
#   ./scripts/build.sh --site    # Site only (skip dependency builds)
#   ./scripts/build.sh --deps    # Dependencies only (skip site build)
#   ./scripts/build.sh --clean   # Clean all build artifacts first
#
# Prerequisites:
#   - Node.js 18+
#   - npm 9+
#   - For local dev: Access to @grokify/site-nav source
#   - For npm mode: @grokify/site-nav published to npm

set -e  # Exit on error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Default paths - can be overridden via environment variables
SITE_NAV_PATH="${SITE_NAV_PATH:-$HOME/go/src/github.com/grokify/web-tools/packages/site-nav}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Parse arguments
BUILD_DEPS=true
BUILD_SITE=true
CLEAN=false
USE_NPM=false

for arg in "$@"; do
    case $arg in
        --npm)
            USE_NPM=true
            ;;
        --site)
            BUILD_DEPS=false
            ;;
        --deps)
            BUILD_SITE=false
            ;;
        --clean)
            CLEAN=true
            ;;
        --help|-h)
            echo "Usage: $0 [--npm|--site|--deps|--clean|--help]"
            echo ""
            echo "Options:"
            echo "  --npm    Use published npm packages (production mode)"
            echo "  --site   Build site only (skip dependency builds)"
            echo "  --deps   Build dependencies only (skip site build)"
            echo "  --clean  Clean all build artifacts first"
            echo "  --help   Show this help message"
            echo ""
            echo "Environment variables:"
            echo "  SITE_NAV_PATH  Path to @grokify/site-nav source (for local dev)"
            echo "                 Default: ~/go/src/github.com/grokify/web-tools/packages/site-nav"
            exit 0
            ;;
    esac
done

# Clean if requested
if [ "$CLEAN" = true ]; then
    log_info "Cleaning build artifacts..."
    rm -rf "$REPO_ROOT/docs"
    rm -rf "$REPO_ROOT/node_modules"
    rm -rf "$REPO_ROOT/apps/web/node_modules"
    rm -rf "$REPO_ROOT/packages/plexus-nav/dist"
    rm -rf "$REPO_ROOT/packages/plexus-nav/node_modules"
    rm -rf "$REPO_ROOT/packages/markdown-blog/dist"
    rm -rf "$REPO_ROOT/packages/markdown-blog/node_modules"
    rm -rf "$REPO_ROOT/packages/presentation-embed/dist"
    rm -rf "$REPO_ROOT/packages/presentation-embed/node_modules"
    log_success "Clean complete"
fi

# Build dependencies
if [ "$BUILD_DEPS" = true ]; then
    log_info "=== Building Dependencies ==="

    if [ "$USE_NPM" = true ]; then
        log_info "Using npm packages (production mode)"

        # Update plexus-nav to use npm version of site-nav
        cd "$REPO_ROOT/packages/plexus-nav"
        if grep -q "file:.*site-nav" package.json; then
            log_info "Switching @grokify/site-nav to npm version..."
            sed -i.bak 's|"@grokify/site-nav": "file:[^"]*"|"@grokify/site-nav": "^0.1.0"|' package.json
            rm -f package.json.bak
        fi

        # Remove local type declarations (npm package has types)
        rm -f src/site-nav.d.ts

    else
        log_info "Using local packages (development mode)"

        # Step 1: Build @grokify/site-nav from source
        log_info "Building @grokify/site-nav..."
        if [ -d "$SITE_NAV_PATH" ]; then
            cd "$SITE_NAV_PATH"
            npm install
            npm run build
            log_success "@grokify/site-nav built"
        else
            log_error "site-nav not found at: $SITE_NAV_PATH"
            log_error "Set SITE_NAV_PATH environment variable or clone web-tools repo"
            log_error "Or use --npm flag to use published npm packages"
            exit 1
        fi

        # Ensure plexus-nav uses local file: reference
        cd "$REPO_ROOT/packages/plexus-nav"
        if ! grep -q "file:.*site-nav" package.json; then
            log_info "Switching @grokify/site-nav to local file reference..."
            sed -i.bak 's|"@grokify/site-nav": "[^"]*"|"@grokify/site-nav": "file:../../../../grokify/web-tools/packages/site-nav"|' package.json
            rm -f package.json.bak
        fi
    fi

    # Step 2: Build @plexusone/nav (depends on site-nav)
    log_info "Building @plexusone/nav..."
    cd "$REPO_ROOT/packages/plexus-nav"

    # Clean up old files that were replaced by the site-nav wrapper
    log_info "Cleaning up old plexus-nav files..."
    rm -f src/plexus-nav.ts src/plexus-mega-menu.ts src/plexus-mobile-menu.ts
    rm -f src/types.ts src/constants.ts src/icons.ts
    rm -rf src/styles

    npm install
    npm run build
    log_success "@plexusone/nav built"

    # Step 3: Build other internal packages
    log_info "Building @plexusone/markdown-blog..."
    cd "$REPO_ROOT/packages/markdown-blog"
    npm install
    npm run build 2>/dev/null || log_warn "markdown-blog build skipped (no build script)"
    log_success "@plexusone/markdown-blog ready"

    log_info "Building @plexusone/presentation-embed..."
    cd "$REPO_ROOT/packages/presentation-embed"
    npm install
    npm run build 2>/dev/null || log_warn "presentation-embed build skipped (no build script)"
    log_success "@plexusone/presentation-embed ready"
fi

# Build site
if [ "$BUILD_SITE" = true ]; then
    log_info "=== Building Site ==="

    cd "$REPO_ROOT"
    npm install
    npm run build

    log_success "Site built successfully!"
    log_info "Output: $REPO_ROOT/docs/"
fi

# Summary
echo ""
log_success "=== Build Complete ==="
if [ -d "$REPO_ROOT/docs" ]; then
    log_info "Static site ready at: $REPO_ROOT/docs/"
    log_info "To preview locally: cd apps/web && npm run preview"
    log_info "To deploy: git add docs/ && git commit -m 'build: update site' && git push"
fi
