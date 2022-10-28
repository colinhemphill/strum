import nextMDX from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import glob from 'glob';
import withPlugins from 'next-compose-plugins';
import nextTranspile from 'next-transpile-modules';
import path from 'path';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

const withVanillaExtract = createVanillaExtractPlugin();
const withTM = nextTranspile(['@strum/react']);

const componentPaths = glob
  .sync('../../packages/strum-react/src/components/**/*.docs.mdx', {
    cwd: process.cwd(),
    absolute: true,
  })
  .map((x) => {
    const name = path.basename(x, '.docs.mdx');
    const route = `/components/${name}`;
    return { name, route };
  });

const layoutPaths = glob
  .sync('../../packages/strum-react/src/layouts/**/*.docs.mdx', {
    cwd: process.cwd(),
    absolute: true,
  })
  .map((x) => {
    const name = path.basename(x, '.docs.mdx');
    const route = `/layouts/${name}`;
    return { name, route };
  });

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMdxCodeMeta],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COMPONENT_PATHS: componentPaths,
    LAYOUT_PATHS: layoutPaths,
  },
  experimental: {
    newNextLinkBehavior: true,
    runtime: 'node',
  },
  pageExtensions: ['mdx', 'tsx'],
  reactStrictMode: true,
};

const plugins = [withMDX, withVanillaExtract, withTM];

export default withPlugins(plugins, nextConfig);
