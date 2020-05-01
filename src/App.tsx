import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import { Box } from 'rebass'
import Name from './components/Name'
import Description from './components/Description'

function App() {
  return (
    <ThemeProvider theme={{ ...preset, backgroundColor: 'green', color: 'red' }}>
      <Box p={100}>
        <Name />
        <Description />
      </Box>
    </ThemeProvider>
  )
}

export default App
