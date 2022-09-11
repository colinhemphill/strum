import { style, StyleRule } from '@vanilla-extract/css';

const visuallyHiddenRule: StyleRule = {
  border: 0,
  clip: 'rect(0, 0, 0, 0)',
  height: 1,
  margin: -1,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
};

export const visuallyHiddenStyle = style({
  ...visuallyHiddenRule,
});

export const visuallyHiddenFocusableStyle = style({
  position: 'relative',
  selectors: {
    '&:not(:focus):not(:focus-within)': {
      ...visuallyHiddenRule,
    },
  },
});
