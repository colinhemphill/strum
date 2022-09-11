import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { headerHeight } from '../Header/Header.css';

export const headerLogoStyle = style({
  height: calc.divide(headerHeight, 2.5),
  width: 'auto',
});
