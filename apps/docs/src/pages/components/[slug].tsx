import { Alert, Box, Icons, Text } from '@strum/react';
import fs from 'fs/promises';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { PropItem } from 'react-docgen-typescript';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import PageTitle, {
  PageTitleProps,
} from '../../components/PageTitle/PageTitle';
import { getComponentName, getComponentPaths } from '../../utils/fs';
import { getStaticTypes } from '../../utils/getStaticTypes';
import { createGitHubLink } from '../../utils/github';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getComponentPaths().map((x) => ({
    params: {
      slug: getComponentName(x),
    },
  })),
  fallback: false,
});

type FrontMatterProps = { comingSoon?: string } & PageTitleProps;

type StaticProps = {
  docsLink: string;
  frontMatter: FrontMatterProps;
  source: MDXRemoteSerializeResult;
  sourceLink: string;
  staticTypes?: Record<string, PropItem>;
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const slug = context.params?.slug?.toString() as string;
  const pathname = getComponentPaths().find(
    (x) => getComponentName(x) === slug,
  ) as string;
  const source = await fs.readFile(pathname, { encoding: 'utf8' });

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkMdxCodeMeta],
    },
  });

  const componentPathname = pathname.replace('docs.mdx', 'tsx');
  const staticTypes = getStaticTypes(componentPathname)[slug] ?? null;

  const docsLink = createGitHubLink(pathname.replace(/^\/.*strum-design/i, ''));
  const sourceLink = createGitHubLink(
    componentPathname.replace(/^\/.*strum-design/i, ''),
  );

  return {
    props: {
      docsLink,
      frontMatter: mdxSource.frontmatter as FrontMatterProps,
      source: mdxSource,
      sourceLink,
      staticTypes,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<Props> = ({
  docsLink,
  frontMatter,
  source,
  sourceLink,
  staticTypes,
}) => {
  return (
    <>
      <PageTitle {...frontMatter} />

      <MDXRemote
        {...source}
        scope={{
          sourceLink,
          types: staticTypes,
        }}
      />

      {frontMatter.comingSoon && (
        <Alert color="warning" Icon={Icons.InfoCircledIcon} size="extraLarge">
          Coming soon
        </Alert>
      )}

      {!docsLink.includes('generated') && !frontMatter.comingSoon && (
        <Box marginTop="8">
          <Link href={docsLink}>
            <Text as="span" color="neutral11">
              Edit on GitHub
            </Text>
          </Link>
        </Box>
      )}
    </>
  );
};

export default Page;
