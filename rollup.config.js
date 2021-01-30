import { terser as pluginTerser } from 'rollup-plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';
import pluginCommonjs from '@rollup/plugin-commonjs';
import { babel as pluginBabel } from '@rollup/plugin-babel';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import * as path from 'path';
import pkg from './package.json';

const moduleName = pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1);
const inputFilePath = 'src/index.ts';
const banner = `
/**
 * @license
 * ${moduleName}.js v${pkg.version}
 * Released under the ${pkg.license} License.
 */
`;

export default [
  {
    input: inputFilePath,
    output: [
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner,
      },
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        plugins: [
          pluginTerser(),
        ],
      },
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: true,
      }),
    ],
  },
  {
    input: inputFilePath,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },
];
