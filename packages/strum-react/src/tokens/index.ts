import { accents } from './accents';
import {
  transitionDurations,
  transitionEasingFunctions,
  transitionProperties,
} from './animation';
import { borderStyles, borderWidths, radii } from './border';
import { baseColors } from './color';
import { contextColors } from './contextColors';
import { neutrals } from './neutrals';
import { opacity } from './opacity';
import { shadows } from './shadows';
import { space, width } from './space';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography';

// Export tokens

export const baseTokens = {
  borderStyles,
  borderWidths,
  colors: baseColors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  shadows,
  space,
  width,
  transitionDurations,
  transitionEasingFunctions,
  transitionProperties,
};
export const neutralTokens = neutrals;
export const accentTokens = accents;
export const contextColorsTokens = contextColors;

export const tokens = {
  ...baseTokens,
  neutral: neutralTokens,
  accent: accentTokens,
};

export type { AccentColor } from './accents';
export type { ColorScheme, ColorSchemeSetting } from './color';
export type { NeutralColor } from './neutrals';
export type BaseTokens = typeof baseTokens;
export type NeutralTokens = typeof neutralTokens;
export type AccentTokens = typeof accentTokens;
export type Tokens = typeof tokens;
