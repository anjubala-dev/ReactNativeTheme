/* eslint-disable */
import * as React from 'react';
import { lightColors, darkColors } from './colorThemes';

import {
  StorageKey,
  getValue,
} from '../common/Storage';

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => { },
});

export const ThemeProvider = (props) => {
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const getColorTheme = await getValue(StorageKey.themeType);
        if (getColorTheme !== null) {
          setIsDark(getColorTheme === 'dark');
        }
      } catch (e) { }
    };
    bootstrapAsync();
  }, []);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme) => setIsDark(scheme === "dark"),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => React.useContext(ThemeContext);