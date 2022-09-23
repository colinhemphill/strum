import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export type NavLink = {
  icon?: IconDefinition;
  name: string;
  route: string;
};

export const mobileLinks: NavLink[] = [
  {
    icon: faGithub,
    name: 'GitHub',
    route: 'https://github.com/colinhemphill/strum',
  },
];

export const overviewLinks: NavLink[] = [
  {
    name: 'Get started',
    route: '/',
  },
  {
    name: 'Design concepts',
    route: '/overview/design-concepts',
  },
  {
    name: 'Development',
    route: '/overview/development',
  },
];

export const componentLinks = JSON.parse(
  JSON.stringify(process.env.COMPONENT_PATHS),
) as NavLink[];

export const layoutLinks = JSON.parse(
  JSON.stringify(process.env.LAYOUT_PATHS),
) as NavLink[];
