function Button({ children, onClick, variant = 'primary', ...props }) {
  const baseStyles = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s'
  }

  const variants = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      ':hover': { backgroundColor: '#0056b3' }
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      ':hover': { backgroundColor: '#545b62' }
    }
  }

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyles, ...variants[variant] }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button