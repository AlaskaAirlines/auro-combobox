import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH;

const getSharedPlugins = (isLegacy) => [
  resolve({
    // in case of multiple lit-element versions (e.g. importing another auro component)
    dedupe: ['lit-element', 'lit-html']
  }),
  commonjs(),
  minifyHTML(),
  terser()
];

const modernConfig = {
  input: {
    ['auro-combobox__bundled']: './index.js',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    ...getSharedPlugins(false),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

const indexExamplesConfig = {
  input: {
    ['index__bundled']: './demo/index.js',
  },
  output: {
    format: 'esm',
    dir: 'demo/'
  },
  plugins: [
    ...getSharedPlugins(false),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

const apiExamplesConfig = {
  input: {
    ['api__bundled']: './demo/api.js',
  },
  output: {
    format: 'esm',
    dir: 'demo/'
  },
  plugins: [
    ...getSharedPlugins(false),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

export default [modernConfig, indexExamplesConfig, apiExamplesConfig];
