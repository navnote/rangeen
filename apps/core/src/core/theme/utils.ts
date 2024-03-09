import {
  Theme as MaterialTheme,
  hexFromArgb,
} from '@material/material-color-utilities';
import { RangeenTheme } from './types';

export const getCssVarName = (str: string) => {
  return `--${str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
};

export const transformMaterialThemeToRangeenTheme = (
  materialTheme: MaterialTheme
): RangeenTheme => {
  return {
    light: {
      background: `${hexFromArgb(materialTheme.schemes.light.background)}`,
      foreground: `${hexFromArgb(materialTheme.schemes.light.onBackground)}`,
      card: `${hexFromArgb(materialTheme.schemes.light.surface)}`,
      cardForeground: `${hexFromArgb(materialTheme.schemes.light.onSurface)}`,
      popover: `${hexFromArgb(materialTheme.schemes.light.surface)}`,
      popoverForeground: `${hexFromArgb(
        materialTheme.schemes.light.onSurface
      )}`,
      primary: `${hexFromArgb(materialTheme.schemes.light.primary)}`,
      primaryForeground: `${hexFromArgb(
        materialTheme.schemes.light.onPrimary
      )}`,
      secondary: `${hexFromArgb(materialTheme.schemes.light.secondary)}`,
      secondaryForeground: `${hexFromArgb(
        materialTheme.schemes.light.onSurface
      )}`,
      muted: `${hexFromArgb(materialTheme.schemes.light.surfaceVariant)}`,
      mutedForeground: `${hexFromArgb(
        materialTheme.schemes.light.onSurfaceVariant
      )}`,
      accent: `${hexFromArgb(materialTheme.schemes.light.inverseOnSurface)}`,
      accentForeground: `${hexFromArgb(
        materialTheme.schemes.light.inverseSurface
      )}`,
      destructive: `${hexFromArgb(materialTheme.schemes.light.error)}`,
      destructiveForeground: `${hexFromArgb(
        materialTheme.schemes.light.onError
      )}`,
      border: `${hexFromArgb(materialTheme.schemes.light.surfaceVariant)}`,
      input: `${hexFromArgb(materialTheme.schemes.light.surfaceVariant)}`,
      ring: `${hexFromArgb(materialTheme.schemes.light.primaryContainer)}`,
      radius: `0.5rem`,
    },
    dark: {
      background: `${hexFromArgb(materialTheme.schemes.dark.background)}`,
      foreground: `${hexFromArgb(materialTheme.schemes.dark.onBackground)}`,
      card: `${hexFromArgb(materialTheme.schemes.dark.surface)}`,
      cardForeground: `${hexFromArgb(materialTheme.schemes.dark.onSurface)}`,
      popover: `${hexFromArgb(materialTheme.schemes.dark.surface)}`,
      popoverForeground: `${hexFromArgb(materialTheme.schemes.dark.onSurface)}`,
      primary: `${hexFromArgb(materialTheme.schemes.dark.primary)}`,
      primaryForeground: `${hexFromArgb(materialTheme.schemes.dark.onPrimary)}`,
      secondary: `${hexFromArgb(materialTheme.schemes.dark.secondary)}`,
      secondaryForeground: `${hexFromArgb(
        materialTheme.schemes.dark.onSurface
      )}`,
      muted: `${hexFromArgb(materialTheme.schemes.dark.surfaceVariant)}`,
      mutedForeground: `${hexFromArgb(
        materialTheme.schemes.dark.onSurfaceVariant
      )}`,
      accent: `${hexFromArgb(materialTheme.schemes.dark.inverseOnSurface)}`,
      accentForeground: `${hexFromArgb(
        materialTheme.schemes.dark.inverseSurface
      )}`,
      destructive: `${hexFromArgb(materialTheme.schemes.dark.error)}`,
      destructiveForeground: `${hexFromArgb(
        materialTheme.schemes.dark.onError
      )}`,
      border: `${hexFromArgb(materialTheme.schemes.dark.surfaceVariant)}`,
      input: `${hexFromArgb(materialTheme.schemes.dark.surfaceVariant)}`,
      ring: `${hexFromArgb(materialTheme.schemes.dark.primaryContainer)}`,
      radius: `0.5rem`,
    },
  };
};
