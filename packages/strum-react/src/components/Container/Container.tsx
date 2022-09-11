import * as React from 'react';
import { Breakpoint } from '../../css';
import { Box, BoxProps } from '../Box';

export const validContainerComponents = [
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
  alignItems?: BoxProps['alignItems'];
  as?: typeof validContainerComponents[number];
  breakpoint?: Breakpoint;
  display?: BoxProps['display'];
  flex?: BoxProps['flex'];
  flexDirection?: BoxProps['flexDirection'];
  /** Sets the container to 100% width at all screen sizes */
  fluid?: boolean;
  justifyContent?: BoxProps['justifyContent'];
};

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  alignItems,
  as = 'div',
  breakpoint,
  children,
  display,
  flex,
  flexDirection,
  fluid = false,
  justifyContent,
}) => {
  const commonProps: BoxProps = {
    alignItems,
    as,
    display,
    flex,
    flexDirection,
    marginX: 'auto',
    paddingX: 'gapX',
    justifyContent,
  };
  const maxWidth: BoxProps['maxWidth'] = fluid
    ? undefined
    : breakpoint
    ? {
        xs: 'full',
        sm: breakpoint === 'sm' ? 'full' : 'containerSm',
        md: breakpoint === 'md' ? 'full' : 'containerMd',
        lg: breakpoint === 'lg' ? 'full' : 'containerLg',
        xl: breakpoint === 'xl' ? 'full' : 'containerXl',
      }
    : {
        xs: 'full',
        sm: 'containerSm',
        md: 'containerMd',
        lg: 'containerLg',
        xl: 'containerXl',
      };
  const width: BoxProps['width'] = fluid ? 'full' : undefined;
  return (
    <Box {...commonProps} maxWidth={maxWidth} width={width}>
      {children}
    </Box>
  );
};
