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
  }
] satisfies Options[]
