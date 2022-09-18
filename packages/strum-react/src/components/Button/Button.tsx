import * as React from 'react';
import { Box, BoxProps } from '../Box';
import { Spinner } from '../Spinner';
import { Stack } from '../Stack';
import * as styles from './Button.css';

type BaseProps = {
  /** Shape of the button */
  borderRadius?: BoxProps['borderRadius'];
  /** Show a loading spinner as a prefix */
  loading?: boolean;
} & Pick<
  JSX.IntrinsicElements['button'],
  | 'onClick'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'children'
  | 'disabled'
  | 'type'
  | 'tabIndex'
> &
  styles.ButtonRecipe &
  Pick<BoxProps, 'width'>;

type WithAnchor = {
  as?: 'a';
} & Pick<JSX.IntrinsicElements['a'], 'href' | 'rel' | 'target'>;

type WithoutAnchor = {
  /** Set the disabled state of the button */
  disabled?: boolean;
  as?: 'button';
};

export type ButtonProps = BaseProps & (WithAnchor | WithoutAnchor);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      borderRadius = 'medium',
      children,
      color = 'accent',
      disabled = false,
      fill = 'solid',
      loading,
      size = 'medium',
      ...boxProps
    },
    ref,
  ) => (
    <Box
      className={styles.buttonRecipe({
        color,
        fill,
        size,
      })}
      borderRadius={borderRadius}
      disabled={disabled}
      ref={ref}
      // Passed-through boxProps
      // Default values for boxProps need to be
      // assigned after the spread below
      {...boxProps}
      as={boxProps.as ?? 'button'}
      width={boxProps.width ?? 'auto'}
    >
      <Stack alignItems="center" as="span" direction="horizontal" gap="2">
        {loading && <Spinner color="current" size="small" />}
        {children}
      </Stack>
    </Box>
  ),
);

Button.displayName = 'Button';
