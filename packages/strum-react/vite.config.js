// @ts-check
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

const external = Object.keys(peerDependencies);

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
      name: 'Strum',
    },
    rollupOptions: {
      external,
    },
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    dts({
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      exclude: ['src/**/*.docs.mdx', 'src/**/*.test.{ts,tsx}'],
      outputDir: 'dist/types',
    }),
  ],
});
