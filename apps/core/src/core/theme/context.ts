import React, { createContext } from 'react';
import { RangeenTheme } from './types';

export type ThemeContextType = {
  rangeenTheme: RangeenTheme;
  primary: string;
  setPrimary: (color: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  rangeenTheme: {} as RangeenTheme,
  primary: 'blue',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPrimary: (color: string) => {},
  isDarkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsDarkMode: (isDarkMode: boolean) => {},
});

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
