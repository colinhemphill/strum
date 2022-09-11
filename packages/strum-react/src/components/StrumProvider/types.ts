import { PropsWithChildren } from 'react';
import {
  AccentColor,
  ColorScheme,
  ColorSchemeSetting,
  NeutralColor,
} from '../../tokens';

export interface UseThemeProps {
  /** The active accent color */
  accent?: AccentColor;
  /** List of all available accent colors */
  accents: AccentColor[];
  /** The active neutral color */
  neutral?: NeutralColor;
  /** List of all available neutral colors */
  neutrals: NeutralColor[];
  /** If the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
  resolvedTheme?: ColorScheme;
  /** Update the accent color */
  setAccent: (accent: AccentColor) => void;
  /** Update the neutral color */
  setNeutral: (neutral: NeutralColor) => void;
  /** Update the theme */
  setTheme: (theme: ColorSchemeSetting) => void;
  /** Returns the system theme preference ("dark" or "light"), regardless of what the active theme is */
  systemTheme?: ColorScheme;
  /** Active theme name */
  theme?: ColorSchemeSetting;
  /** Indicates that the theme has mounted */
  themeIsReady: boolean;
  /** List of all available theme names */
  themes: ColorSchemeSetting[];
}

export type StrumProviderProps = PropsWithChildren<{
  /** Default accent color name */
  defaultAccent?: AccentColor;
  /** Default neutral color name */
  defaultNeutral?: NeutralColor;
  /** Default theme name */
  defaultTheme?: ColorSchemeSetting;
  /** Prefix your localStorage keys */
  keyPrefix?: string;
}>;
