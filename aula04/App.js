import React from 'react'
import { ThemeProvider } from './src/contexts/ThemeContext'
import MainComponent from './src/components/MainComponent'

const App = () => {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  )
}

export default App