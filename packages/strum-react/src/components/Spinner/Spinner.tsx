import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import * as React from 'react';
import { Box, BoxProps } from '../Box';
import * as styles from './Spinner.css';

type Props = {
  accessibilityLabel?: string;
  color?: BoxProps['color'];
} & styles.SpinnerRecipe;

export const Spinner = React.forwardRef(
  (
    {
      accessibilityLabel = 'Loading',
      color = 'neutral11',
      size = 'medium',
    }: Props,
    ref: React.Ref<HTMLElement>,
  ) => {
    return (
      <AccessibleIcon.Root label={accessibilityLabel}>
        <Box className={styles.spinnerRecipe({ size })} color={color} ref={ref}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="12"
              cy="12"
              fill="none"
              r="10"
              strokeDasharray="42"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12"
              fill="none"
              opacity="0.25"
              r="10"
              strokeLinecap="round"
            />
          </svg>
        </Box>
      </AccessibleIcon.Root>
    );
  },
);

Spinner.displayName = 'Spinner';
