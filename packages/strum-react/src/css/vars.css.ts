import {
  createGlobalTheme,
  createGlobalThemeContract,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import deepmerge from 'ts-deepmerge';
import {
  AccentColor,
  accentTokens,
  baseTokens,
  contextColorsTokens,
  NeutralColor,
  neutralTokens,
} from '../tokens';
import { getVarName } from './utils';

// Base theme
const baseVars = createGlobalThemeContract(baseTokens, getVarName);
createGlobalTheme(':root', baseVars, baseTokens);

// Neutral themes
const neutralVars = createThemeContract({ neutral: neutralTokens.mauve.light });

const createNeutralTheme = (neutral: NeutralColor) => ({
  dark: createTheme(neutralVars, {
    neutral: neutralTokens[neutral].dark,
  }),
  light: createTheme(neutralVars, {
    neutral: neutralTokens[neutral].light,
  }),
});

export const neutralThemes = {
  gray: createNeutralTheme('gray'),
  mauve: createNeutralTheme('mauve'),
  olive: createNeutralTheme('olive'),
  sage: createNeutralTheme('sage'),
  sand: createNeutralTheme('sand'),
  slate: createNeutralTheme('slate'),
};

// Accent themes
const accentVars = createThemeContract({
  accent: accentTokens.blue.light,
  error: contextColorsTokens.error.light,
  success: contextColorsTokens.success.light,
  warning: contextColorsTokens.warning.light,
});

const createAccentTheme = (accent: AccentColor) => ({
  dark: createTheme(accentVars, {
    accent: accentTokens[accent].dark,
    error: contextColorsTokens.error.dark,
    success: contextColorsTokens.success.dark,
    warning: contextColorsTokens.warning.dark,
  }),
  light: createTheme(accentVars, {
    accent: accentTokens[accent].light,
    error: contextColorsTokens.error.light,
    success: contextColorsTokens.success.light,
    warning: contextColorsTokens.warning.light,
  }),
});

export const accentThemes = {
  amber: createAccentTheme('amber'),
  blue: createAccentTheme('blue'),
  crimson: createAccentTheme('crimson'),
  cyan: createAccentTheme('cyan'),
  grass: createAccentTheme('grass'),
  green: createAccentTheme('green'),
  indigo: createAccentTheme('indigo'),
  lime: createAccentTheme('lime'),
  mint: createAccentTheme('mint'),
  orange: createAccentTheme('orange'),
  pink: createAccentTheme('pink'),
  plum: createAccentTheme('plum'),
  purple: createAccentTheme('purple'),
  red: createAccentTheme('red'),
  sky: createAccentTheme('sky'),
  teal: createAccentTheme('teal'),
  tomato: createAccentTheme('tomato'),
  violet: createAccentTheme('violet'),
  yellow: createAccentTheme('yellow'),
};

// Vars
export const colorVars = deepmerge(neutralVars, accentVars);
export const vars = deepmerge(baseVars, neutralVars, accentVars);
