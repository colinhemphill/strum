import { style } from '@vanilla-extract/css';
import { vars } from './vars.css';

export const disabledStateStyle = style({
  ':disabled': {
    cursor: 'not-allowed',
    opacity: vars.opacity[50],
    pointerEvents: 'none',
  },
});
