import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import * as React from 'react';
import { Box } from '../Box';
import { Stack } from '../Stack';
import * as styles from './Alert.css';

type Props = {
  /** A React component from the available Strum icons */
  Icon?: React.ComponentType<IconProps>;
  /** Provides screen readers meaning for the icon */
  iconAccessibilityLabel?: string;
} & styles.AlertRecipe;

export const Alert: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  color = 'accent',
  Icon,
  iconAccessibilityLabel,
  size = 'medium',
}) => {
  const iconLabel = iconAccessibilityLabel
    ? iconAccessibilityLabel
    : Icon?.displayName || 'icon';

  return (
    <Box
      className={styles.alertRecipe({
        color,
        size,
      })}
      role="alert"
    >
      <Stack alignItems="center" direction="horizontal" wrap={false}>
        {Icon && (
          <AccessibleIcon label={iconLabel}>
            <Icon className={styles.alertIconRecipe({ size })} />
          </AccessibleIcon>
        )}
        <span>{children}</span>
      </Stack>
    </Box>
  );
};
