function Container({ children, maxWidth = '1200px', padding = '1rem' }) {
  return (
    <div
      style={{
        maxWidth,
        margin: '0 auto',
        padding,
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {children}
    </div>
  )
}

export default Container