import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/sharp-solid-svg-icons';
import { Box, Button, Container, Stack, VisuallyHidden } from '@strum/react';
import { useContext } from 'react';
import { MenuContext } from '../../pages/_app';
import { gridNavStyle } from '../../styles/layout.css';
import AccentSelect from '../AccentSelect/AccentSelect';
import NeutralSelect from '../NeutralSelect/NeutralSelect';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import NavLinks from './NavLinks';

const MainNav: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <>
      {/* Desktop version */}
      <Box
        as="aside"
        className={gridNavStyle}
        display={{ xs: 'none', md: 'block' }}
        overflow="auto"
        paddingY="6"
      >
        <NavLinks />
      </Box>

      {/* Mobile version */}
      {isOpen && (
        <Box
          as="aside"
          backgroundColor="accent1"
          className={gridNavStyle}
          display={{ xs: 'block', md: 'none' }}
          overflow="auto"
          position="fixed"
          paddingY="6"
          zIndex="50"
        >
          <Box position="fixed" right="gapX">
            <Button
              color="transparent"
              onClick={() => setIsOpen(false)}
              size="small"
            >
              <VisuallyHidden>Close menu</VisuallyHidden>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </Button>
          </Box>

          <Box marginBottom="6" marginTop="8">
            <Container>
              <Stack
                alignItems="center"
                direction="horizontal"
                gap="2"
                justifyContent="center"
              >
                <ThemeSelect />
                <AccentSelect />
                <NeutralSelect />
              </Stack>
            </Container>
          </Box>

          <NavLinks mobile />
        </Box>
      )}
    </>
  );
};

export default MainNav;
