import * as React from 'react';
import { Box, BoxProps } from '../../layouts';
import { navStyle } from './Nav.css';

type NavProps = {
  alignItems?: BoxProps['alignItems'];
  direction?: 'horizontal' | 'vertical';
  gap?: BoxProps['gap'];
  justifyContent?: BoxProps['justifyContent'];
};

export const Nav: React.FC<React.PropsWithChildren<NavProps>> = ({
  alignItems,
  children,
  direction = 'horizontal',
  gap = '4',
  justifyContent,
}) => {
  return (
    <Box
      alignItems={alignItems}
      as="ul"
      className={navStyle}
      display="flex"
      flexDirection={direction === 'horizontal' ? 'row' : 'column'}
      flexWrap="wrap"
      gap={gap}
      justifyContent={justifyContent}
      marginY="0"
      paddingLeft="0"
    >
      {children}
    </Box>
  );
};
