import * as React from 'react';
import { Box, BoxProps } from '../Box';
import * as styles from './Badge.css';

type Props = {
  /** Shape of the badge */
  borderRadius?: BoxProps['borderRadius'];
} & styles.BadgeRecipe;

export const Badge: React.FC<React.PropsWithChildren<Props>> = ({
  borderRadius = 'medium',
  children,
  color = 'accent',
}) => {
  return (
    <Box
      as="span"
      borderRadius={borderRadius}
      className={styles.badgeRecipe({
        color,
      })}
      display="inline-block"
      fontWeight="semiBold"
      paddingX="2"
      paddingY="1"
      textAlign="center"
    >
      {children}
    </Box>
  );
};
