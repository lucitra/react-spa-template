import { useTranslation } from 'react-i18next'

function WelcomeSection() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('welcome')}</h1>
      <p>{t('app.description', 'This is a React SPA template with best practices.')}</p>
    </section>
  )
}

export default WelcomeSection