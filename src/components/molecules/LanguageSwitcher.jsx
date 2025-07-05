import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from '@/config/languages'

function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="language-select" style={{ marginInlineEnd: '0.5rem' }}>
        {t('selectLanguage')}:
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={handleLanguageChange}
        style={{ padding: '0.25rem' }}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher