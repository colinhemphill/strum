import nextMDX from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { glob } from 'glob';
import withPlugins from 'next-compose-plugins';
import path from 'path';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

const withVanillaExtract = createVanillaExtractPlugin();

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
  pageExtensions: ['mdx', 'tsx'],
  reactStrictMode: true,
  transpilePackages: ['@strum/react'],
};

const plugins = [withMDX, withVanillaExtract];

export default withPlugins(plugins, nextConfig);
