import * as React from 'react';
import { Box, BoxProps } from '../../layouts';
import * as styles from './Heading.css';

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
} as const;

type HeadingProps = {
  align?: BoxProps['textAlign'];
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend';
  color?: BoxProps['color'];
  id?: string;
  transform?: BoxProps['textTransform'];
  responsive?: boolean;
  wordBreak?: BoxProps['wordBreak'];
} & styles.HeadingRecipe;

export const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  align,
  as,
  children,
  color = 'neutral12',
  id,
  level = '2',
  responsive = true,
  transform,
  wordBreak,
}) => {
  return (
    <Box
      as={as ?? resolveDefaultComponent[level]}
      className={styles.headingRecipe({
        level,
        responsive,
      })}
      color={color}
      fontFamily="sans"
      id={id}
      textAlign={align}
      textTransform={transform}
      wordBreak={wordBreak}
    >
      {children}
    </Box>
  );
};
