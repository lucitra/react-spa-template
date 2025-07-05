import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslations from './locales/en/translation.json'
import arTranslations from './locales/ar/translation.json'
import frTranslations from './locales/fr/translation.json'

const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  },
  fr: {
    translation: frTranslations
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n