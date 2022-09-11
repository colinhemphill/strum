import * as RadixAvatar from '@radix-ui/react-avatar';
import * as React from 'react';
import { Box, BoxProps } from '../Box';
import * as styles from './Avatar.css';

type AvatarProps = {
  alt: string;
  fallbackText?: string;
  size?: BoxProps['height'];
  src?: string;
} & styles.AvatarContainerRecipe;

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  fallbackText,
  shape = 'circle',
  size = '8',
  src,
}) => {
  return (
    <Box
      as={RadixAvatar.Root}
      className={styles.avatarContainerRecipe({
        shape,
      })}
      height={size}
      width={size}
    >
      <RadixAvatar.Image alt={alt} className={styles.avatarStyle} src={src} />
      <RadixAvatar.Fallback
        className={styles.avatarFallbackStyle}
        delayMs={600}
      >
        {fallbackText}
      </RadixAvatar.Fallback>
    </Box>
  );
};
