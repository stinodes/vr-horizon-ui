import typescript from 'rollup-plugin-typescript2'
import svgr from '@svgr/rollup'
import pkg from './package.json'

export default [
  {
    input: 'lib/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
        clean: true,
        objectHashIgnoreUnknownHack: true,
      }),
      svgr(),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: 'example/src/ui/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
  },
]
