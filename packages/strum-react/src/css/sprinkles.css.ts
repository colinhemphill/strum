import {
  ConditionalValue,
  createMapValueFn,
  createSprinkles,
  defineProperties,
  RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';
import { Breakpoint, breakpointNames, breakpoints } from './breakpoints';
import { colorVars, vars } from './vars.css';

const atomicColors = {
  ...vars.colors,
  ...colorVars.accent,
  ...colorVars.error,
  ...colorVars.neutral,
  ...colorVars.success,
  ...colorVars.warning,
};

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
const flexibility = [0, 1, 2, 3, 4] as const;

const extendedSpace = {
  screenSm: breakpoints.sm,
  screenMd: breakpoints.md,
  screenLg: breakpoints.lg,
  screenXl: breakpoints.xl,
  containerSm: breakpoints.sm - 32,
  containerMd: breakpoints.md - 48,
  containerLg: breakpoints.lg - 64,
  containerXl: breakpoints.xl - 128,
};

const responsiveProperties = defineProperties({
  defaultCondition: 'xs',
  conditions: {
    xs: {},
    sm: { '@media': `(min-width: ${breakpoints.sm}px)` },
    md: { '@media': `(min-width: ${breakpoints.md}px)` },
    lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
    xl: { '@media': `(min-width: ${breakpoints.xl}px)` },
  },
  properties: {
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    borderWidth: vars.borderWidths,
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    borderStyle: vars.borderStyles,
    borderTopStyle: vars.borderStyles,
    borderBottomStyle: vars.borderStyles,
    bottom: vars.space,
    display: [
      'block',
      'flex',
      'inline-flex',
      'grid',
      'inline-block',
      'none',
      'contents',
    ],
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: {
      ...vars.space,
      ...extendedSpace,
    },
    flexDirection: ['column', 'row'],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ['wrap', 'nowrap'],
    fontSize: {
      ...vars.fontSizes,
      inherit: 'inherit',
    },
    fontWeight: vars.fontWeights,
    gap: vars.space,
    height: vars.space,
    inset: vars.space,
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    justifySelf: flexAlignment,
    left: vars.space,
    letterSpacing: vars.letterSpacings,
    lineHeight: vars.lineHeights,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginTop: vars.space,
    maxHeight: vars.space,
    maxWidth: {
      ...vars.width,
      ...extendedSpace,
      none: 'none',
    },
    minHeight: vars.space,
    minWidth: vars.width,
    overflow: ['auto', 'hidden', 'scroll', 'unset'],
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    right: vars.space,
    textAlign: ['center', 'left', 'right'],
    top: vars.space,
    width: {
      ...vars.width,
      ...extendedSpace,
    },
  },
  shorthands: {
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    cursor: ['default', 'pointer', 'not-allowed'],
    fontFamily: vars.fonts,
    opacity: vars.opacity,
    pointerEvents: ['none'],
    strokeWidth: vars.borderWidths,
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    transitionProperty: vars.transitionProperties,
    transitionTimingFunction: vars.transitionEasingFunctions,
    visibility: ['hidden', 'visible'],
    whiteSpace: [
      'normal',
      'nowrap',
      'pre',
      'pre-line',
      'pre-wrap',
      'initial',
      'inherit',
    ],
    wordBreak: ['break-word'],
    wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '75': 75,
      '100': 100,
      auto: 'auto',
    },
  },
});

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
    hoverStrict: { selector: '&:hover:not(:disabled):not(:focus)' },
  },
  defaultCondition: 'base',
  properties: {
    backgroundColor: atomicColors,
    borderColor: atomicColors,
    boxShadow: {
      none: { boxShadow: 'none' },
      small: {
        boxShadow: vars.shadows.small,
      },
      medium: {
        boxShadow: vars.shadows.medium,
      },
      large: {
        boxShadow: vars.shadows.large,
      },
    },

    color: atomicColors,
    outlineColor: atomicColors,
  },
});

const motionSafeProperties = defineProperties({
  conditions: {
    base: { '@media': '(prefers-reduced-motion: no-preference)' },
  },
  defaultCondition: 'base',
  properties: {
    transitionDuration: vars.transitionDurations,
  },
});

export const atoms = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  selectorProperties,
  motionSafeProperties,
);
export type Atoms = Parameters<typeof atoms>[0];

export type OptionalResponsiveValue<Value extends string | number> =
  ConditionalValue<typeof responsiveProperties, Value>;
export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveProperties, Value>;

export type OptionalResponsiveObject<Value> =
  | Value
  | Partial<Record<Breakpoint, Value>>;
export type RequiredResponsiveObject<Value> = Partial<
  Record<Breakpoint, Value>
> &
  Record<typeof breakpointNames[0], Value>;

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
