import typescript from 'rollup-plugin-typescript2'

import packageConfig from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageConfig.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [
        typescript()
    ],
  external: ['react', 'react-dom']
}