# React SPA Template with Best Practices

A production-ready React Single Page Application template featuring modern development practices, internationalization, and comprehensive tooling.

> 🤖 **GitHub UI Setup**: After creating your repository from this template, you'll be prompted to run a simple setup workflow through the GitHub UI to customize it for your project!

## 🚀 Features

### Core Technologies
- **React 19** - Latest React with functional components and hooks
- **Vite 7** - Fast build tool and development server
- **JavaScript** - Primary language (easily convertible to TypeScript)

### Developer Experience
- **ESLint** - Code linting with React hooks and accessibility rules
- **Commitlint** - Conventional commit message enforcement
- **Husky** - Pre-commit hooks for linting and testing
- **Vitest** - Fast unit testing with React Testing Library
- **Path Aliases** - Clean imports with `@/`, `@components/`, etc.

### Architecture & Patterns
- **Component-Driven Architecture** - Atomic Design structure (atoms/molecules/organisms)
- **Error Boundaries** - Graceful error handling with user-friendly fallbacks
- **Internationalization (i18n)** - Support for multiple languages with RTL
- **Environment Variables** - Secure configuration management

### Internationalization
- **React i18next** - Comprehensive i18n solution
- **3 Languages** - English, Arabic (RTL), French
- **Language Detection** - Automatic browser language detection
- **Dynamic Language Switching** - Real-time language and direction changes

### Code Quality & Testing
- **Pre-commit Hooks** - Automatic linting and testing before commits
- **Accessibility Testing** - ESLint rules for WCAG compliance
- **Unit Tests** - React Testing Library setup with examples
- **Conventional Commits** - Standardized commit messages

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI elements (Button, Container)
│   ├── molecules/      # Simple component combinations (LanguageSwitcher, WelcomeSection)
│   └── organisms/      # Complex components (ErrorBoundary)
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── locales/            # Translation files
│   ├── en/
│   ├── ar/
│   └── fr/
└── test/               # Test utilities and setup
```

## 🛠️ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Use this template** (if using as GitHub template)
   ```bash
   # Click "Use this template" on GitHub, then clone your new repo
   git clone https://github.com/lucitra/your-new-project.git
   cd your-new-project
   ```

2. **Or clone directly**
   ```bash
   git clone https://github.com/lucitra/react-spa-template.git
   cd react-spa-template
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

### 🎯 Template Setup

After creating your repository from this template:

**⚡ Quick Setup - Click the button below to customize your template:**

[![Run Customize Workflow](https://img.shields.io/badge/🔧_Customize_Template-Run_Workflow-blue?style=for-the-badge)](../../actions/workflows/customize.yml)

**Manual Steps:**
1. Go to **Actions** → **Customize Template**
2. Click **"Run workflow"**  
3. Enter your **name** and **email**
4. Click **"Run workflow"** (green button)

Done! Your template is now customized.

**Optional:** Enable GitHub Pages in Settings → Pages → Source: "GitHub Actions" to automatically deploy your app.

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:5173)
npm run preview      # Preview production build locally

# Building
npm run build        # Build for production

# Code Quality
npm run lint         # Run ESLint
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once

# Git Hooks (automatic)
# Pre-commit: Runs linting and tests
# Commit-msg: Validates commit message format
```

## 🌍 Internationalization

### Adding a New Language

1. **Create translation file**
   ```bash
   mkdir src/locales/es
   # Copy src/locales/en/translation.json to src/locales/es/translation.json
   # Translate the content
   ```

2. **Update language configuration**
   ```javascript
   // src/config/languages.js
   export const SUPPORTED_LANGUAGES = [
     // ... existing languages
     { code: 'es', name: 'Español', dir: 'ltr' }
   ]
   ```

3. **Import in i18n configuration**
   ```javascript
   // src/i18n.js
   import esTranslations from './locales/es/translation.json'
   
   const resources = {
     // ... existing resources
     es: { translation: esTranslations }
   }
   ```

### Using Translations

```javascript
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('app.description', 'Default text if key missing')}</p>
    </div>
  )
}
```

## 🧩 Component Development

### Creating New Components

Follow the atomic design structure:

```javascript
// src/components/atoms/NewAtom.jsx
function NewAtom({ children, variant = 'default', ...props }) {
  return (
    <div className={`atom-${variant}`} {...props}>
      {children}
    </div>
  )
}

export default NewAtom
```

### Using Path Aliases

```javascript
import Button from '@components/atoms/Button'
import { SUPPORTED_LANGUAGES } from '@config/languages'
import MyHook from '@/hooks/useMyHook'
```

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Application Configuration
VITE_APP_NAME=My Awesome App
VITE_API_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=false
```

Access in code:
```javascript
const appName = import.meta.env.VITE_APP_NAME
```

## 🎯 Customization

### Styling
- Components use inline styles for simplicity
- Easy to migrate to CSS modules, Styled Components, or Tailwind CSS
- Design tokens can be added to `src/config/`

### Adding Features
- **Routing**: Add React Router for multi-page navigation
- **State Management**: Add Zustand, Redux Toolkit, or Context API
- **API Layer**: Add Axios, React Query, or SWR
- **UI Library**: Add Material-UI, Chakra UI, or Ant Design

## 🧪 Testing

### Running Tests
```bash
npm run test        # Watch mode
npm run test:run    # Single run
```

### Writing Tests
```javascript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## 📝 Git Workflow

This template enforces conventional commits:

```bash
# ✅ Good commit messages
git commit -m "feat: add user authentication"
git commit -m "fix: resolve language switching bug"
git commit -m "docs: update README installation steps"

# ❌ Bad commit messages (will be rejected)
git commit -m "updates"
git commit -m "fix stuff"
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 🚀 Deployment

### GitHub Pages (Automatic)
- Deploys automatically on every push to `main`
- Available at: `https://yourusername.github.io/your-repo-name/`
- Customize workflow automatically configures the base path

### Vercel/Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass: `npm run test:run`
5. Ensure linting passes: `npm run lint`
6. Commit with conventional format
7. Create a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React i18next](https://react.i18next.com/)
- [Vitest](https://vitest.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Happy coding! 🎉**

> This template provides a solid foundation for building modern React applications. Customize it to fit your specific needs and project requirements.