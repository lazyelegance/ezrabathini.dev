import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import Section from './Section'
import NavBar from './NavBar'
import Header from './Header'

const theme = {
  ...preset,
  colors: {
    ...preset.colors,
    primary: '#f4f4f4',
    secondary: '#ffffff',
    slateGrey: '#6a6d74',
    denim: '#375777',
    darkPeach: '#e3865d',
    steel: '#868a91',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Header />
      <Section title={'Key Skills'} background={'Secondary'} />
      <Section title={'Recent projects'} />
      <Section title={'Work History'} background={'Secondary'} />
    </ThemeProvider>
  )
}

export default App
