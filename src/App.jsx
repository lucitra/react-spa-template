import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import Container from '@components/atoms/Container'
import LanguageSwitcher from '@components/molecules/LanguageSwitcher'
import WelcomeSection from '@components/molecules/WelcomeSection'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  return (
    <Container>
      <LanguageSwitcher />
      <WelcomeSection />
    </Container>
  )
}

export default App
