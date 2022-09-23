import { calc } from '@vanilla-extract/css-utils';

export const columnSizes = {
  true: undefined,
  auto: 'auto',
  full: '100%',
  '1/12': calc.multiply(1 / 12, '100%').toString(),
  '2/12': calc.multiply(2 / 12, '100%').toString(),
  '3/12': calc.multiply(3 / 12, '100%').toString(),
  '4/12': calc.multiply(4 / 12, '100%').toString(),
  '5/12': calc.multiply(5 / 12, '100%').toString(),
  '6/12': calc.multiply(6 / 12, '100%').toString(),
  '7/12': calc.multiply(7 / 12, '100%').toString(),
  '8/12': calc.multiply(8 / 12, '100%').toString(),
  '9/12': calc.multiply(9 / 12, '100%').toString(),
  '10/12': calc.multiply(10 / 12, '100%').toString(),
  '11/12': calc.multiply(11 / 12, '100%').toString(),
  '12/12': calc.multiply(12 / 12, '100%').toString(),
};

export const spaceScale = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.5rem',
  '6': '2rem',
  '7': '2.5rem',
  '8': '3rem',
  '9': '4rem',
  '10': '5rem',
  '11': '6rem',
  '12': '8rem',
};

const baseSizes = {
  auto: 'auto',
  full: '100%',
  fitContent: 'fit-content',
  maxContent: 'max-content',
  minContent: 'min-content',
  '100vh': '100vh',
  '100vw': '100vw',
  gapX: '2rem',
  gapY: '2rem',
};

export const space = {
  ...spaceScale,
  ...baseSizes,
};

export const width = {
  ...space,
  ...columnSizes,
};
