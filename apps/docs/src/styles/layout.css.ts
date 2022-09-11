import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { headerHeight } from '../components/Header/Header.css';

export const appLayoutStyle = style({
  vars: { [headerHeight]: '4rem' },
});

export const gridContainerStyle = style({
  display: 'block',

  '@media': {
    [`(min-width: 768px)`]: {
      display: 'grid',
      gridTemplateColumns: 'minmax(250px, max-content) 1fr',
      gridTemplateAreas: `
        "grid-nav grid-main"
      `,
    },
  },
});

export const gridNavStyle = style({
  gridArea: 'grid-nav',

  '@media': {
    '(max-width: 768px)': {
      height: '100vh',
      left: 0,
      top: 0,
      width: '100vw',
      overflow: 'auto',
    },
    '(min-width: 768px)': {
      height: calc.subtract('100vh', headerHeight),
      position: 'sticky',
      top: headerHeight,
    },
  },
});

export const gridMainStyle = style({
  gridArea: 'grid-main',
  overflow: 'hidden',
});
