import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/*.ts',
    'scripts/postinstall.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  onSuccess: 'npm run build:fix',
}
