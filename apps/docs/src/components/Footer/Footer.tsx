import { Box, Container, Heading, Text } from '@strum/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" backgroundColor="neutral2" paddingY="8">
      <Container>
        <Heading level="3">Strum Design</Heading>

        <Box marginTop="2">
          <Text size="small">
            Copyright ©{new Date().getFullYear()} under the{' '}
            <a href="https://github.com/colinhemphill/strum-design/blob/main/LICENSE.md">
              MIT license
            </a>
          </Text>
          <Text size="small">
            Created by <a href="https://colinhemphill.com">Colin Hemphill</a>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
