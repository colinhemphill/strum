import clsx from 'clsx';
import * as React from 'react';
import { spaceScale } from '../../tokens/space';
import { Box, BoxProps } from '../Box';
import * as styles from './Row.css';

const validRowComponents = [
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

type RowProps = {
  alignItems?: BoxProps['alignItems'];
  as?: typeof validRowComponents[number];
  gapX?: keyof typeof spaceScale;
  gapY?: keyof typeof spaceScale;
  justifyContent?: BoxProps['justifyContent'];
};

export const Row: React.FC<React.PropsWithChildren<RowProps>> = ({
  alignItems,
  as = 'div',
  children,
  gapX = '4',
  gapY = '4',
  justifyContent,
}) => {
  const classes = clsx(
    styles.rowStyle,
    styles.rowXGapStyle[gapX],
    styles.rowYGapStyle[gapY],
  );

  return (
    <Box
      alignItems={alignItems}
      as={as}
      className={classes}
      display="flex"
      flexWrap="wrap"
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
};
