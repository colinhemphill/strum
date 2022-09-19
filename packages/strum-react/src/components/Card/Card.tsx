import * as React from 'react';
import { Box, BoxProps } from '../Box';
import { Text } from '../Text';
import { TextProps } from '../Text/Text';
import * as styles from './Card.css';

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
} & styles.CardRecipe;

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  as = 'div',
  children,
  color = 'neutral2',
}) => {
  return (
    <Box
      as={as}
      borderRadius="medium"
      borderStyle="solid"
      borderWidth="1"
      className={styles.cardRecipe({
        color,
      })}
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
  textAlign?: BoxProps['textAlign'];
};

export const CardBody: React.FC<React.PropsWithChildren<CardBoxProps>> = ({
  alignItems,
  children,
  display,
  justifyContent,
  textAlign,
}) => {
  return (
    <Box
      alignItems={alignItems}
      display={display}
      justifyContent={justifyContent}
      padding="4"
      textAlign={textAlign}
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
  textAlign,
}) => {
  return (
    <Box
      alignItems={alignItems}
      borderBottomStyle="solid"
      borderTopRadius="medium"
      borderWidth="1"
      className={styles.cardHeaderFooterStyle}
      display={display}
      justifyContent={justifyContent}
      paddingX="4"
      paddingY="2"
      textAlign={textAlign}
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
  textAlign,
}) => {
  return (
    <Box
      alignItems={alignItems}
      borderBottomRadius="medium"
      borderTopStyle="solid"
      borderWidth="1"
      className={styles.cardHeaderFooterStyle}
      display={display}
      justifyContent={justifyContent}
      paddingX="4"
      paddingY="2"
      textAlign={textAlign}
    >
      {children}
    </Box>
  );
};

type CardTextProps = {
  as?: TextProps['as'];
};

export const CardTitle: React.FC<React.PropsWithChildren<CardTextProps>> = ({
  as = 'h2',
  children,
}) => {
  return (
    <Text as={as} color="inherit" size="extraLarge" weight="semiBold">
      {children}
    </Text>
  );
};

export const CardSubtitle: React.FC<React.PropsWithChildren<CardTextProps>> = ({
  as = 'h3',
  children,
}) => {
  return (
    <Box className={styles.cardSubtitleStyle}>
      <Text as={as} color="inherit" size="large" weight="normal">
        {children}
      </Text>
    </Box>
  );
};

export const CardText: React.FC<React.PropsWithChildren<CardTextProps>> = ({
  as = 'p',
  children,
}) => {
  return (
    <Text as={as} color="inherit" size="base">
      {children}
    </Text>
  );
};
