import { tokens } from '@strum/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

interface Props {
  description?: string;
  pageTitle?: string;
}

const PageHead: React.FC<Props> = ({
  description = 'Accessible React components and styles built with Vanilla Extract.',
  pageTitle = 'Strum Design',
}) => {
  const { asPath } = useRouter();

  const baseURL =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://strum.design';
  const url = baseURL + asPath;
  const defaultImgURL = baseURL + '/img/Strum-ShareImage.jpg';
  const title = `${pageTitle} | Strum Design System`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={tokens.accent.blue.dark.accent9} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Strum Design System" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultImgURL} />
      <meta property="og:image:height" content="1920" />
      <meta property="og:image:width" content="1080" />

      <meta name="image" content={defaultImgURL} />
      <meta itemProp="image" content={defaultImgURL} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@strum_design" />
      <meta name="twitter:creator" content="@strum_design" />
    </Head>
  );
};

export default PageHead;
