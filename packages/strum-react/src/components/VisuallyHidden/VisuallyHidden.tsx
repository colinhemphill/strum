import * as React from 'react';
import { Box } from '../../layouts';
import * as styles from './VisuallyHidden.css';

type HTMLProperties = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'as' | 'className' | 'color' | 'height' | 'width'
>;

type VisuallyHiddenProps = {
  as?: React.ElementType;
  focusable?: boolean;
} & HTMLProperties;

export const VisuallyHidden = ({
  as,
  children,
  focusable = false,
  ...props
}: React.PropsWithChildren<VisuallyHiddenProps>) => {
  return (
    <Box
      as={as}
      className={
        focusable
          ? styles.visuallyHiddenFocusableStyle
          : styles.visuallyHiddenStyle
      }
      overflow="hidden"
      padding="0"
      {...props}
    >
      {children}
    </Box>
  );
};
