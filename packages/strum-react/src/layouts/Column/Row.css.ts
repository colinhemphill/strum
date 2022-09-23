import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { spaceScale } from '../../tokens/space';

export const rowGapX = createVar();
export const rowGapY = createVar();

export const rowStyle = style({
  marginLeft: calc.multiply(rowGapX, -0.5),
  marginRight: calc.multiply(rowGapX, -0.5),
  marginTop: calc.multiply(rowGapY, -1),
});

export const rowXGapStyle = styleVariants(spaceScale, (gapSize) => [
  {
    vars: { [rowGapX]: gapSize },
  },
]);

export const rowYGapStyle = styleVariants(spaceScale, (gapSize) => [
  {
    vars: { [rowGapY]: gapSize },
  },
]);
