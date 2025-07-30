import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
}, [
  {
    ignores: [
      'docs/**/*',
      'examples/**/*',
    ],
  },
])
