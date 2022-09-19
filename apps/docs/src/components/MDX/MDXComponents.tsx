import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/sharp-solid-svg-icons';
import { Components } from '@mdx-js/react/lib';
import { Box, Heading, Text, VisuallyHidden } from '@strum/react';
import { kebabCase } from 'lodash';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import InlineCode from '../InlineCode/InlineCode';
import PageHead from '../PageHead/PageHead';
import PageTitle from '../PageTitle/PageTitle';
import PropsTable from '../PropsTable/PropsTable';
import {
  anchorLinkStyle,
  anchorStyle,
  headingWithAnchorStyle,
} from './MDXComponents.css';

const CodeBlock = dynamic(() => import('../CodeBlock/CodeBlock'));

const MDXComponents: Components = {
  code: ({ children }) => <InlineCode>{children}</InlineCode>,
  h1: ({ children }) => <Heading level="1">{children}</Heading>,
  h2: ({ children }) => {
    const anchor = kebabCase(children?.toString());

    return (
      <Box className={headingWithAnchorStyle} marginBottom="4" marginTop="8">
        <span className={anchorStyle} id={anchor} />
        <Heading level="2">
          {children}
          <Box
            as="a"
            className={anchorLinkStyle}
            display="inline-block"
            href={`#${anchor}`}
            marginLeft="2"
            transitionDuration="150"
            transitionProperty="opacity"
          >
            <Text
              color={{ base: 'neutral11', hover: 'neutral12' }}
              transitionDuration="150"
              transitionProperty="colors"
            >
              <VisuallyHidden>Link to this heading</VisuallyHidden>
              <FontAwesomeIcon icon={faLink} size="xs" />
            </Text>
          </Box>
        </Heading>
      </Box>
    );
  },
  h3: ({ children }) => (
    <Box marginBottom="4" marginTop="8">
      <Heading level="3">{children}</Heading>
    </Box>
  ),
  li: ({ children }) => (
    <Text as="li" lineHeight="1.625">
      {children}
    </Text>
  ),
  Link,
  p: ({ children }) => (
    <Box marginY="4">
      <Text as="p">{children}</Text>
    </Box>
  ),
  pre: (props) => <CodeBlock {...props} />,
  PageHead,
  PageTitle,
  PropsTable,
  Text,
};

export default MDXComponents;
