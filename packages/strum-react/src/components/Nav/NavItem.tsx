import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import * as styles from './NavItem.css';

type Props = {
  /** Indicates that the nav link points to the active page route */
  active?: boolean;
};

export const NavItem: React.FC<React.PropsWithChildren<Props>> = ({
  active,
  children,
}) => {
  return (
    <Box
      aria-current={active ? 'page' : undefined}
      as="li"
      className={styles.navItemStyle}
    >
      <Text
        as="span"
        color={{
          base: active ? 'accent11' : 'neutral11',
          hoverStrict: active ? 'accent11' : 'neutral12',
        }}
        transitionDuration="150"
        transitionProperty="colors"
        transitionTimingFunction="inOut"
      >
        {children}
      </Text>
    </Box>
  );
};
