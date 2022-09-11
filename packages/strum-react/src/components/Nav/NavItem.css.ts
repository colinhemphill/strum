import { globalStyle, style } from '@vanilla-extract/css';

export const navItemStyle = style({
  textDecoration: 'none',
});

globalStyle(`${navItemStyle} a`, {
  textDecoration: 'none',
});
