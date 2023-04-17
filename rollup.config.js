import typescript from '@rollup/plugin-typescript'
import tsConfig from './tsconfig.json' assert { type: 'json'}
export default [{
  input: ['./src/index.ts', './src/http.ts', './src/ws.ts', './src/direct.ts'],
  output: {
    dir: './exports',
    format: 'es'
  },
  plugins: [
    typescript(tsConfig)
  ],
  external: [
    './identity.js'
  ]
}]
