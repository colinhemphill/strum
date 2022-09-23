import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, Nav, NavItem, Text } from '@strum/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren, useContext } from 'react';
import { MenuContext } from '../../pages/_app';
import {
  componentLinks,
  layoutLinks,
  mobileLinks,
  NavLink,
  overviewLinks,
} from './links';

type NavLinksProps = {
  mobile?: boolean;
};

const navGap = '3';

const NavGroupHeading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box marginBottom={navGap}>
      <Text color="neutral12" transform="uppercase" weight="semiBold">
        {children}
      </Text>
    </Box>
  );
};

type NavListProps = {
  links: NavLink[];
};

const NavItemList: React.FC<NavListProps> = ({ links }) => {
  const { asPath } = useRouter();
  const { setIsOpen } = useContext(MenuContext);

  return (
    <Nav direction="vertical" gap={navGap}>
      {links.map((link) => {
        const active = asPath === link.route;

        return (
          <NavItem active={active} key={link.route}>
            <Link href={link.route} onClick={() => setIsOpen(false)}>
              {link.icon && (
                <Box as="span" marginRight="1">
                  <FontAwesomeIcon fixedWidth icon={link.icon} />
                </Box>
              )}
              {link.name}
            </Link>
          </NavItem>
        );
      })}
    </Nav>
  );
};

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false }) => {
  return (
    <Container fluid>
      <NavGroupHeading>Overview</NavGroupHeading>
      <NavItemList links={overviewLinks} />

      <Box marginBottom="6" />

      <NavGroupHeading>Layout</NavGroupHeading>
      <NavItemList links={layoutLinks} />

      <Box marginBottom="6" />

      <NavGroupHeading>Components</NavGroupHeading>
      <NavItemList links={componentLinks} />

      {mobile && (
        <>
          <Box marginTop="6" />
          <NavGroupHeading>Links</NavGroupHeading>
          <NavItemList links={mobileLinks} />
        </>
      )}
    </Container>
  );
};

export default NavLinks;
