import { style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../css';
import { columnSizes } from '../../tokens/space';
import { rowGapX, rowGapY } from './Row.css';

export const columnStyle = style({
  boxSizing: 'border-box',
  flex: '1 0',
  flexShrink: 0,
  marginTop: rowGapY,
  maxWidth: '100%',
  paddingLeft: calc.multiply(rowGapX, 0.5),
  paddingRight: calc.multiply(rowGapX, 0.5),
  width: '100%',
});

const responsiveColumnStyles = (width?: string): StyleRule => {
  console.log('responsive', width);

  if (!width) {
    return {
      flex: '1 0',
    };
  }

  return {
    flex: '0 0 auto',
    width,
  };
};

export const baseColumnsStyle = styleVariants(columnSizes, (width) => [
  responsiveColumnStyles(width),
]);

export const smColumnsStyle = styleVariants(columnSizes, (width) => [
  responsiveStyle({
    sm: {
      ...responsiveColumnStyles(width),
    },
  }),
]);

export const mdColumnsStyle = styleVariants(columnSizes, (width) => [
  responsiveStyle({
    md: {
      ...responsiveColumnStyles(width),
    },
  }),
]);

export const lgColumnsStyle = styleVariants(columnSizes, (width) => [
  responsiveStyle({
    lg: {
      ...responsiveColumnStyles(width),
    },
  }),
]);

export const xlColumnsStyle = styleVariants(columnSizes, (width) => [
  responsiveStyle({
    xl: {
      ...responsiveColumnStyles(width),
    },
  }),
]);
