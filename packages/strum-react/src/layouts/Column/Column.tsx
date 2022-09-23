import clsx from 'clsx';
import * as React from 'react';
import { columnSizes } from '../../tokens/space';
import { Box } from '../Box';
import * as styles from './Column.css';

const validColumnComponents = [
  'a',
  'article',
  'div',
  'form',
  'header',
  'label',
  'li',
  'main',
  'section',
  'span',
] as const;

type ColumnSize = keyof typeof columnSizes | 'auto' | 'full' | true;
type Offset = Omit<ColumnSize, 'auto' | 'full' | '12'>;

type ColumnProps = {
  as?: typeof validColumnComponents[number];
  /* The width of the column at or above the `sm` breakpoint */
  sm?: ColumnSize;
  /* The width of the column at or above the `md` breakpoint */
  md?: ColumnSize;
  /* The width of the column at or above the `lg` breakpoint */
  lg?: ColumnSize;
  /* Offset the column by a fractional width */
  offset?: Offset;
  /* The base width of the column */
  width?: ColumnSize;
  /* The width of the column at or above the `xl` breakpoint */
  xl?: ColumnSize;
};

export const Column: React.FC<React.PropsWithChildren<ColumnProps>> = ({
  as = 'div',
  children,
  sm,
  md,
  lg,
  width,
  xl,
}) => {
  const baseWidth = width === true ? 'true' : width;
  const smWidth = sm === true ? 'true' : sm;
  const mdWidth = md === true ? 'true' : md;
  const lgWidth = lg === true ? 'true' : lg;
  const xlWidth = xl === true ? 'true' : xl;

  const classes = clsx(
    styles.columnStyle,
    baseWidth ? styles.baseColumnsStyle[baseWidth] : null,
    smWidth ? styles.smColumnsStyle[smWidth] : null,
    mdWidth ? styles.mdColumnsStyle[mdWidth] : null,
    lgWidth ? styles.lgColumnsStyle[lgWidth] : null,
    xlWidth ? styles.xlColumnsStyle[xlWidth] : null,
  );

  return (
    <Box as={as} className={classes}>
      {children}
    </Box>
  );
};
