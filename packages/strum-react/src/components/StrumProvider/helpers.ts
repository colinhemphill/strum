import {
  AccentColor,
  ColorScheme,
  ColorSchemeSetting,
  NeutralColor,
} from '../../tokens';
import { MEDIA } from './StrumProvider';

const isServer = typeof window === 'undefined';

export const getStored = <T>(key: string, fallback: T) => {
  if (isServer) return undefined;

  let value;
  try {
    value = (localStorage.getItem(key) as T) || undefined;
  } catch (e) {
    // Unsupported
  }
  return value || fallback;
};

export const setStored = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // unsupported
  }
};

export const getTheme = (key: string, fallback?: ColorSchemeSetting) => {
  return getStored<ColorSchemeSetting | undefined>(key, fallback);
};

export const getAccent = (key: string, fallback?: AccentColor) => {
  return getStored<AccentColor | undefined>(key, fallback);
};

export const getNeutral = (key: string, fallback?: NeutralColor) => {
  return getStored<NeutralColor | undefined>(key, fallback);
};

export const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA);
  const isDark = e.matches;
  const systemTheme: ColorScheme = isDark ? 'dark' : 'light';
  return systemTheme;
};
