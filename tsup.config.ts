import type { Options } from 'tsup'

export default [
  {
    entryPoints: [
      'src/*.ts',
    ],
    target: 'node16',
    platform: 'node',
    clean: true,
    format: ['cjs', 'esm'],
    dts: true,
    onSuccess: 'npm run build:fix',
    external: ['proper-lockfile'],
  },
  {
    entryPoints: [
      'scripts/postinstall.ts',
    ],
    target: 'node16',
    platform: 'node',
    outDir: 'scripts',
    format: ['cjs'],
    onSuccess: 'npm run build:fix',
    external: ['proper-lockfile'],
  },
] satisfies Options[]
