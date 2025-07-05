# Template Setup Guide

This guide helps you customize the React SPA Template for your specific project needs.

## 🔧 Initial Customization

### 1. Update Project Information

**package.json**
```json
{
  "name": "your-project-name",
  "description": "Your project description",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-project-name.git"
  },
  "homepage": "https://yourusername.github.io/your-project-name"
}
```

**index.html**
```html
<title>Your App Name</title>
<meta name="description" content="Your app description">
```

### 2. Configure Environment Variables

Create `.env` from `.env.example`:
```bash
cp .env.example .env
```

Update with your values:
```bash
VITE_APP_NAME=Your App Name
VITE_API_URL=https://your-api.com
VITE_ENABLE_ANALYTICS=true
```

### 3. Customize Translations

**Update existing languages:**
- Edit `src/locales/en/translation.json`
- Edit `src/locales/ar/translation.json`
- Edit `src/locales/fr/translation.json`

**Add new languages:**
1. Create folder: `src/locales/[lang-code]/`
2. Add `translation.json` file
3. Update `src/config/languages.js`
4. Import in `src/i18n.js`

### 4. Customize Components

**Update welcome content:**
- Edit `src/components/molecules/WelcomeSection.jsx`
- Update translation keys in locale files

**Styling:**
- Modify inline styles in components
- Or add CSS modules/styled-components

## 🎨 Branding & Styling

### Colors & Theme
Create `src/config/theme.js`:
```javascript
export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  }
}
```

### Favicon & Icons
1. Replace `public/favicon.ico`
2. Add other icon sizes to `public/`
3. Update `index.html` with proper meta tags

## 📱 PWA Configuration (Optional)

### Add Service Worker
1. Install: `npm install vite-plugin-pwa`
2. Configure in `vite.config.js`
3. Add PWA manifest in `public/`

## 🔄 State Management (Optional)

### Zustand (Recommended)
```bash
npm install zustand
```

Create `src/store/useStore.js`:
```javascript
import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))
```

### Redux Toolkit
```bash
npm install @reduxjs/toolkit react-redux
```

## 🌐 API Integration (Optional)

### Axios
```bash
npm install axios
```

Create `src/services/api.js`:
```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export default api
```

### React Query
```bash
npm install @tanstack/react-query
```

## 🧩 UI Libraries (Optional)

### Material-UI
```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Chakra UI
```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Ant Design
```bash
npm install antd
```

## 🎯 TypeScript Migration

### Install TypeScript
```bash
npm install -D typescript @types/react @types/react-dom
```

### Rename Files
- `*.jsx` → `*.tsx`
- `*.js` → `*.ts`

### Add tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@locales/*": ["src/locales/*"],
      "@config/*": ["src/config/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 📦 Additional Dependencies

### Development
- **Prettier**: `npm install -D prettier`
- **React DevTools**: Browser extension
- **ESLint plugins**: Additional rules as needed

### Production
- **React Router**: `npm install react-router-dom`
- **Date handling**: `npm install date-fns` or `dayjs`
- **Form handling**: `npm install react-hook-form`
- **Validation**: `npm install zod` or `yup`

## 🚀 Deployment Setup

### GitHub Pages
Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

### Vercel
Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify
Create `public/_redirects`:
```
/*    /index.html   200
```

## 🧪 Testing Setup

### E2E Testing with Playwright
```bash
npm install -D @playwright/test
npx playwright install
```

### Visual Regression Testing
```bash
npm install -D @storybook/test-runner
```

## 📋 Checklist for New Project

- [ ] Update package.json information
- [ ] Configure environment variables
- [ ] Customize translations
- [ ] Update branding (favicon, colors, etc.)
- [ ] Set up deployment configuration
- [ ] Add any additional dependencies needed
- [ ] Update README with project-specific information
- [ ] Configure CI/CD if needed
- [ ] Set up monitoring/analytics if required

## 🆘 Common Issues

### Build Errors
- Check environment variables are properly prefixed with `VITE_`
- Ensure all imports use correct paths/aliases
- Verify all dependencies are installed

### i18n Issues
- Check translation keys exist in all language files
- Verify language codes match in configuration
- Ensure i18n is imported in main.jsx

### Component Issues
- Verify path aliases are configured correctly
- Check component exports/imports
- Ensure components follow naming conventions

## 📞 Support

For issues specific to the template:
1. Check this setup guide
2. Review the main README.md
3. Check existing GitHub issues
4. Create a new issue with detailed description

---

Happy building! 🚀