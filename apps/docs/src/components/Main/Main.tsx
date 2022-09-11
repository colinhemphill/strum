import { SkipNavContent } from '@reach/skip-nav';
import { Box, Container } from '@strum/react';
import { PropsWithChildren } from 'react';
import { gridMainStyle } from '../../styles/layout.css';

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SkipNavContent />
      <Box as="main" className={gridMainStyle} paddingY="8">
        <Container>{children}</Container>
      </Box>
    </>
  );
};

export default Main;
