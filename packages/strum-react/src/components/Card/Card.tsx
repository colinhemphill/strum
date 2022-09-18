import * as React from 'react';
import { Box, BoxProps } from '../Box';
import { Text } from '../Text';
import { TextProps } from '../Text/Text';

const validCardComponents = [
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

type CardProps = {
  as?: typeof validCardComponents[number];
};

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  as = 'div',
  children,
}) => {
  return (
    <Box
      as={as}
      backgroundColor="neutral1"
      borderColor="neutral6"
      borderRadius="medium"
      borderStyle="solid"
      borderWidth="1"
      display="flex"
      flexDirection="column"
      position="relative"
      wordWrap="break-word"
    >
      {children}
    </Box>
  );
};

type CardBoxProps = {
  display?: BoxProps['display'];
  alignItems?: BoxProps['alignItems'];
  justifyContent?: BoxProps['justifyContent'];
};

export const CardBody: React.FC<React.PropsWithChildren<CardBoxProps>> = ({
  alignItems,
  children,
  display,
  justifyContent,
}) => {
  return (
    <Box
      alignItems={alignItems}
      display={display}
      justifyContent={justifyContent}
      padding="4"
    >
      {children}
    </Box>
  );
};

export const CardHeader: React.FC<React.PropsWithChildren<CardBoxProps>> = ({
  alignItems,
  children,
  display,
  justifyContent,
}) => {
  return (
    <Box
      alignItems={alignItems}
      display={display}
      backgroundColor="neutral3"
      borderBottomStyle="solid"
      borderColor="neutral6"
      borderTopRadius="medium"
      borderWidth="1"
      justifyContent={justifyContent}
      paddingX="4"
      paddingY="2"
    >
      {children}
    </Box>
  );
};

export const CardFooter: React.FC<React.PropsWithChildren<CardBoxProps>> = ({
  alignItems,
  children,
  display,
  justifyContent,
}) => {
  return (
    <Box
      alignItems={alignItems}
      backgroundColor="neutral3"
      borderBottomRadius="medium"
      borderColor="neutral6"
      borderTopStyle="solid"
      borderWidth="1"
      display={display}
      justifyContent={justifyContent}
      paddingX="4"
      paddingY="2"
    >
      {children}
    </Box>
  );
};

type CardTitleAndSubtitleProps = {
  as: TextProps['as'];
};

export const CardTitle: React.FC<
  React.PropsWithChildren<CardTitleAndSubtitleProps>
> = ({ as, children }) => {
  return (
    <Text as={as} color="neutral12" size="extraLarge">
      {children}
    </Text>
  );
};

export const CardSubtitle: React.FC<
  React.PropsWithChildren<CardTitleAndSubtitleProps>
> = ({ as, children }) => {
  return (
    <Text as={as} color="neutral11" size="large">
      {children}
    </Text>
  );
};

export const CardText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text as="p" color="neutral12" size="base">
      {children}
    </Text>
  );
};
