import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { headerHeight } from '../Header/Header.css';

export const headingWithAnchorStyle = style({});

export const anchorLinkStyle = style({
  opacity: 0,
  textDecoration: 'none',

  ':focus': {
    opacity: 1,
  },
  selectors: {
    [`${headingWithAnchorStyle}:hover &`]: {
      opacity: 1,
    },
  },
});

export const anchorStyle = style({
  display: 'block',
  position: 'relative',
  top: calc.negate(headerHeight),
  visibility: 'hidden',
});
