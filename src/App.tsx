import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Header from './Header'
// import Skills from './Skills'
// import Dots from './Dots'
// import Projects from './Projects'
// import WorkHistory from './WorkHistory'
import theme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <NavBar /> */}
      {/* <Dots></Dots> */}
      <Header />
      {/* <Skills />
      <Projects />
      <WorkHistory /> */}
    </ThemeProvider>
  )
}

export default App
