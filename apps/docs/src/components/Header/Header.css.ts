import { createVar, style } from '@vanilla-extract/css';

export const headerHeight = createVar();

export const headerStyle = style({
  height: headerHeight,
  position: 'sticky',
  top: 0,
});
