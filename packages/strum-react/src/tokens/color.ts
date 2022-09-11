import { rgb } from 'polished';

export type ColorScheme = 'dark' | 'light';
export type ColorSchemeSetting = ColorScheme | 'system';

export const baseColors = {
  black: rgb(0, 0, 0),
  current: 'currentColor',
  inherit: 'inherit',
  transparent: 'transparent',
  white: rgb(255, 255, 255),
};
