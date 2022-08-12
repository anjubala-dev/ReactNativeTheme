/* eslint-disable */

import React from 'react';
import { ThemeProvider } from './src/theme/ThemeProvider';
import Welcome from './src/screens/Welcome';

const App = () => {

  return (
    <ThemeProvider>
      {/* App Entry*/}
      <Welcome />
    </ThemeProvider>
  );
};
export default App;
