import * as React from 'react';
import { OptionalResponsiveObject, OptionalResponsiveValue } from '../../css';
import { Box, BoxProps } from '../Box';
import { Direction, directionToFlexDirection, wrapToFlexWrap } from './utils';

const validStackComponents = [
  'a',
  'article',
  'div',
  'form',
  'header',
  'label',
  'li',
  'main',
  'section',
  'span',
] as const;

type Props = {
  as?: typeof validStackComponents[number];
  alignItems?: BoxProps['alignItems'];
  direction?: OptionalResponsiveValue<Direction>;
  flex?: BoxProps['flex'];
  justifyContent?: BoxProps['justifyContent'];
  gap?: BoxProps['gap'];
  wrap?: OptionalResponsiveObject<true | false>;
};

export const Stack = ({
  as = 'div',
  alignItems,
  children,
  justifyContent,
  flex,
  direction = 'vertical',
  gap = '4',
  wrap = true,
}: React.PropsWithChildren<Props>) => {
  const flexDirection = directionToFlexDirection(direction);
  const flexWrap = wrapToFlexWrap(wrap);
  return (
    <Box
      alignItems={alignItems}
      as={as}
      display="flex"
      flex={flex}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      gap={gap}
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
};
