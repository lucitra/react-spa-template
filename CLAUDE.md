# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React SPA Template with best practices, featuring component-driven architecture, internationalization, and comprehensive tooling. It serves as a production-ready starting point for React applications.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## Architecture

### Tech Stack
- **React 19.1.0** - UI library
- **Vite 7.0.0** - Build tool and dev server
- **ESLint 9.29.0** - Code linting (flat config format)
- **JavaScript** - Primary language (not TypeScript)

### Project Structure
- `/src` - All React components and application code
  - `main.jsx` - Entry point, renders App to DOM
  - `App.jsx` - Main application component
  - `index.css` - Global styles
  - `App.css` - Component-specific styles
- `/public` - Static assets served directly
- `/dist` - Production build output (gitignored)

### Key Configuration
- **vite.config.js** - Minimal config with React plugin
- **eslint.config.js** - ESLint flat config with React hooks and refresh plugins
- **No testing framework** currently configured

## Code Style and Conventions

- **Component Architecture**: Follows Atomic Design principles (atoms/molecules/organisms)
- **JavaScript/JSX**: Primary language with easy TypeScript migration path
- **React 19**: Functional components with hooks and modern patterns
- **Inline Styles**: Used for simplicity, easily migrated to CSS-in-JS or modules
- **Path Aliases**: `@/`, `@components/`, `@locales/`, `@config/` configured
- **Conventional Commits**: Enforced via commitlint and pre-commit hooks

## Commit Message Guidelines

**IMPORTANT**: All commit messages MUST follow these rules:

### Format
```
<type>: <subject>
```

### Rules
1. **Type**: Must be one of: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
2. **Subject**: 
   - **MUST be all lowercase** (except proper nouns like React, GitHub, etc.)
   - No period at the end
   - Max 100 characters
   - Imperative mood ("add" not "adds" or "added")

### Examples
✅ **Correct:**
```
feat: add user authentication
fix: resolve memory leak in component
docs: update readme with new examples
```

❌ **Incorrect:**
```
feat: Add user authentication     # Wrong: Capital 'A'
fix: resolved memory leak.        # Wrong: Past tense and period
docs: Update README              # Wrong: Capital 'U'
```

## Template-Specific Guidelines

### When working with this template:
1. **Maintain component structure** - Keep atomic design organization
2. **Follow i18n patterns** - All user-facing text should use translation keys
3. **Use path aliases** - Import with `@components/` instead of relative paths
4. **Add accessibility** - ESLint rules enforce a11y best practices
5. **Write tests** - Add tests for new components using existing patterns

### Component Creation:
- **Atoms**: Basic UI elements (Button, Input, Container)
- **Molecules**: Simple combinations (LanguageSwitcher, FormField)
- **Organisms**: Complex components (Header, ErrorBoundary)

### Adding Features:
- Update translations in all language files
- Follow existing component patterns
- Add tests for new functionality
- Update documentation if needed

## Deployment

Template supports multiple deployment targets:
- GitHub Pages (configure base path in vite.config.js)
- Vercel/Netlify (zero-config deployment)
- Any static hosting service

## Important Notes

- **Complete testing setup** with Vitest and React Testing Library
- **Pre-commit hooks** run linting and tests automatically
- **Accessibility testing** included via ESLint rules
- **TypeScript ready** - easy migration path documented in SETUP.md
- **Production ready** with error boundaries and proper error handling