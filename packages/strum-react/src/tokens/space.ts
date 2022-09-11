import { calc } from '@vanilla-extract/css-utils';

type Column = {
  [columnSize: string]: string;
};

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const columnSizes = columns.reduce<Column>((accumulator, column) => {
  const key = `${column}/12`;
  accumulator[key] = calc(column / 12)
    .multiply('100%')
    .toString();
  return { ...accumulator };
}, {});

export const space = {
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

export const width = {
  ...space,
  ...columnSizes,
};
