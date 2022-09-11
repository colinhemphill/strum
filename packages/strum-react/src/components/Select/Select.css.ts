import { style } from '@vanilla-extract/css';
import { atoms, vars } from '../../css';
import { disabledStateStyle } from '../../css/utilityClasses.css';

export const triggerStyle = style([
  atoms({
    alignItems: 'center',
    backgroundColor: {
      base: 'neutral3',
      focus: 'neutral5',
      hoverStrict: 'neutral4',
    },
    borderColor: {
      base: 'neutral7',
      focus: 'accent7',
      hoverStrict: 'neutral8',
    },
    borderRadius: 'medium',
    borderWidth: '2',
    color: 'neutral12',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: '2',
    paddingX: '4',
    paddingY: '2',
    transitionDuration: '150',
    transitionProperty: 'colors',
    transitionTimingFunction: 'inOut',
  }),
  {
    borderStyle: 'solid',
    gap: vars.space[2],
    lineHeight: 1,
    outline: 'none',
    selectors: {
      '&[data-placeholder]': { color: vars.neutral.neutral11 },
    },
  },
  disabledStateStyle,
]);

export const iconStyle = atoms({ color: 'neutral11' });

export const contentStyle = atoms({
  backgroundColor: 'neutral2',
  borderRadius: 'medium',
  boxShadow: 'medium',
  overflow: 'hidden',
  zIndex: '50',
});

export const viewportStyle = atoms({
  padding: '2',
});

export const itemStyle = style([
  atoms({
    alignItems: 'center',
    borderRadius: 'medium',
    color: 'neutral12',
    display: 'flex',
    lineHeight: '2',
    paddingX: '6',
    position: 'relative',
  }),
  {
    outline: 'none',
    userSelect: 'none',
    selectors: {
      '&[data-disabled]': {
        color: vars.neutral.neutral10,
        pointerEvents: 'none',
      },
      '&[data-highlighted]': {
        backgroundColor: vars.accent.accent4,
      },
    },
  },
]);

export const labelStyle = atoms({
  color: 'neutral11',
  fontSize: 'extraSmall',
  fontWeight: 'bold',
  lineHeight: '2',
  paddingX: '6',
  textTransform: 'uppercase',
});

export const separatorStyle = style([
  atoms({
    backgroundColor: 'neutral6',
    margin: '2',
  }),
  {
    height: '1px',
  },
]);

export const itemIndicatorStyle = style({
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  width: 25,
});

const scrollButtonStyles = atoms({
  alignItems: 'center',
  backgroundColor: 'neutral3',
  color: 'neutral12',
  cursor: 'default',
  display: 'flex',
  paddingY: '2',
  justifyContent: 'center',
});

export const scrollUpButtonStyle = scrollButtonStyles;

export const scrollDownButtonStyle = scrollButtonStyles;
