import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import './i18n'

describe('App', () => {
  it('renders welcome heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello World')
  })

  it('renders app description', () => {
    render(<App />)
    const description = screen.getByText(/this is a react spa template/i)
    expect(description).toBeInTheDocument()
  })

  it('renders language switcher', () => {
    render(<App />)
    const languageSelect = screen.getByLabelText(/select language/i)
    expect(languageSelect).toBeInTheDocument()
  })
})