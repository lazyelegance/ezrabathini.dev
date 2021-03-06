import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Header from './Header';

import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
