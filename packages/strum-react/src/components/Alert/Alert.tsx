import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import * as React from 'react';
import { Box, Stack } from '../../layouts';
import * as styles from './Alert.css';

type AlertProps = {
  /** Adds a solid border at the start of the alert */
  emphasis?: boolean;
  /** A React component from the available Strum icons */
  Icon?: React.ComponentType<IconProps>;
  /** Provides screen readers meaning for the icon */
  iconAccessibilityLabel?: string;
} & styles.AlertRecipe;

export const Alert: React.FC<React.PropsWithChildren<AlertProps>> = ({
  children,
  color = 'accent',
  emphasis = false,
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
        emphasis: emphasis ? 'left' : undefined,
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
