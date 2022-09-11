import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/sharp-solid-svg-icons';
import { SkipNavLink } from '@reach/skip-nav';
import { Box, Button, Container, Stack, VisuallyHidden } from '@strum/react';
import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../pages/_app';
import AccentSelect from '../AccentSelect/AccentSelect';
import Logo from '../Logo/Logo';
import NeutralSelect from '../NeutralSelect/NeutralSelect';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { headerStyle } from './Header.css';

const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <Box
      as="header"
      backgroundColor="neutral1"
      borderBottomStyle="solid"
      borderWidth="1"
      borderColor="neutral6"
      className={headerStyle}
      display="flex"
      zIndex="10"
      alignItems="center"
    >
      <Container flex="auto" fluid>
        <Box alignItems="center" display="flex" justifyContent="space-between">
          <Link href="/">
            <Logo />
          </Link>
          <VisuallyHidden focusable>
            <SkipNavLink />
          </VisuallyHidden>
          <Stack alignItems="center" direction="horizontal">
            <Box display={{ xs: 'none', md: 'block' }}>
              <Link href="https://github.com/colinhemphill/strum-design">
                <VisuallyHidden focusable>GitHub</VisuallyHidden>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
            </Box>

            <Box display={{ xs: 'none', md: 'block' }}>
              <Stack direction="horizontal">
                <ThemeSelect />
                <AccentSelect />
                <NeutralSelect />
              </Stack>
            </Box>

            <Box display={{ xs: 'block', md: 'none' }}>
              <Button
                color="transparent"
                onClick={() => setIsOpen(!isOpen)}
                size="small"
              >
                <VisuallyHidden>Open menu</VisuallyHidden>
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
