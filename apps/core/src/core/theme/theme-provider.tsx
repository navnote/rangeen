import { useEffect, useMemo, useState } from 'react';
import { ThemeContext, ThemeContextType } from './context';

import {
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities';
import { getCssVarName, transformMaterialThemeToRangeenTheme } from './utils';
import { RangeenThemeSchema } from './types';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [primary, setPrimary] = useState('#a66a54');

  const rangeenTheme = useMemo(() => {
    const materialTheme = themeFromSourceColor(argbFromHex(primary));
    return transformMaterialThemeToRangeenTheme(materialTheme);
  }, [primary]);

  useEffect(() => {
    // update css var --primary on :root
    Object.keys(rangeenTheme.light).forEach((key) => {
      const value = rangeenTheme.light[key as keyof RangeenThemeSchema];
      document.documentElement.style.setProperty(getCssVarName(key), value);
    });

    Object.keys(rangeenTheme.dark).forEach((key) => {
      const value = rangeenTheme.dark[key as keyof RangeenThemeSchema];
      document.documentElement.style.setProperty(
        `${getCssVarName(key)}-dark`,
        value
      );
    });

    // add class dark to body based on isDarkMode
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [rangeenTheme, isDarkMode]);

  const themeValue: ThemeContextType = {
    rangeenTheme,
    primary,
    setPrimary,
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
