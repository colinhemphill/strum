import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import * as React from 'react';
import { Box, BoxProps } from '../Box';
import * as styles from './Skeleton.css';

type Props = {
  accessibilityLabel?: string;
  width?: BoxProps['width'];
} & styles.SkeletonRecipe;

export const Skeleton: React.FC<Props> = ({
  accessibilityLabel = 'Loading',
  animation = 'glow',
  width = 'full',
}) => {
  return (
    <AccessibleIcon.Root label={accessibilityLabel}>
      <Box
        as="span"
        backgroundColor="current"
        className={styles.skeletonRecipe({ animation })}
        display="inline-block"
        opacity="50"
        width={width}
      />
    </AccessibleIcon.Root>
  );
};
