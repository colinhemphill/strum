import { ReactNode } from '@mdx-js/react/lib';
import { Box, Heading, Text } from '@strum/react';
import * as React from 'react';
import PageHead from '../PageHead/PageHead';

export type PageTitleProps = {
  description?: string;
  subtitle?: ReactNode;
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({
  description,
  subtitle,
  title,
}) => {
  return (
    <>
      <PageHead description={description} pageTitle={title} />

      <Box marginBottom="8">
        <Heading level="1">{title}</Heading>

        {subtitle && (
          <Box marginTop="4">
            <Text color="neutral11" size="extraLarge">
              {subtitle}
            </Text>
          </Box>
        )}
      </Box>
    </>
  );
};

export default PageTitle;
