import type { Options } from 'tsup'

export default [
  {
    entryPoints: [
      'src/*.ts',
    ],
    clean: true,
    format: ['cjs', 'esm'],
    dts: true,
    onSuccess: 'npm run build:fix',
  },
  {
    entryPoints: [
      'scripts/postinstall.ts',
    ],
    outDir: 'scripts',
    format: ['cjs'],
    onSuccess: 'npm run build:fix',
  },
] satisfies Options[]
