import json from '@rollup/plugin-json';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import depsExternal from 'rollup-plugin-node-externals';

const plugins = [vanillaExtractPlugin(), depsExternal(), esbuild(), json()];

/**
 * @type {import('rollup').RollupOptions}
 */
const buildOptions = {
  input: 'src/index.ts',
  plugins,
  output: [
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',

      // Change .css.js files to something else so that they don't get re-processed by consumer's setup
      entryFileNames({ name }) {
        return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
      },

      // Apply preserveModulesRoot to asset names
      assetFileNames({ name }) {
        return name.replace(/^src\//, '');
      },

      exports: 'named',
    },
  ],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const declarationOptions = {
  input: 'src/index.ts',
  plugins: [...plugins, dts()],
  output: [
    {
      dir: 'dist/types',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
};

const options = [buildOptions, declarationOptions];

export default options;
