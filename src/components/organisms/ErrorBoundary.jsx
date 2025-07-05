import { Component } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../atoms/Button'

class ErrorBoundaryClass extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback />
    }

    return this.props.children
  }
}

function ErrorFallback() {
  const { t } = useTranslation()
  
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{t('error.title', 'Something went wrong')}</h1>
      <p>{t('error.message', 'An unexpected error occurred. Please try refreshing the page.')}</p>
      <Button onClick={handleReload} style={{ marginTop: '1rem' }}>
        {t('error.reload', 'Reload page')}
      </Button>
    </div>
  )
}

export default ErrorBoundaryClass