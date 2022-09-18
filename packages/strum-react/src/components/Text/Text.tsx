import * as React from 'react';
import { Box, BoxProps } from '../Box';
import * as styles from './Text.css';

export type TextProps = {
  align?: BoxProps['textAlign'];
  as?:
    | 'code'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'li'
    | 'p'
    | 'span';
  color?: BoxProps['color'];
  font?: BoxProps['fontFamily'];
  letterSpacing?: BoxProps['letterSpacing'];
  lineHeight?: BoxProps['lineHeight'];
  transform?: BoxProps['textTransform'];
  transitionDuration?: BoxProps['transitionDuration'];
  transitionProperty?: BoxProps['transitionProperty'];
  transitionTimingFunction?: BoxProps['transitionTimingFunction'];
  weight?: BoxProps['fontWeight'];
  whiteSpace?: BoxProps['whiteSpace'];
  wordBreak?: BoxProps['wordBreak'];
} & styles.TextRecipe;

export const Text = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<TextProps>
>(
  (
    {
      align,
      as = 'div',
      children,
      color = 'neutral12',
      ellipsis,
      font = 'sans',
      letterSpacing,
      lineHeight = '1.5',
      size,
      transform,
      transitionDuration,
      transitionProperty,
      transitionTimingFunction,
      weight,
      whiteSpace,
      wordBreak,
    },
    ref,
  ) => {
    return (
      <Box
        as={as}
        className={styles.textRecipe({
          size,
          ellipsis: ellipsis ? true : undefined,
        })}
        color={color}
        fontFamily={font}
        fontWeight={weight}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        ref={ref}
        textAlign={align}
        textTransform={transform}
        transitionDuration={transitionDuration}
        transitionProperty={transitionProperty}
        transitionTimingFunction={transitionTimingFunction}
        whiteSpace={whiteSpace}
        wordBreak={wordBreak}
      >
        {children}
      </Box>
    );
  },
);

Text.displayName = 'Text';
