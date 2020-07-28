import { SnOperation } from '@sensio/types'
import { generateNpmName } from '..'

const packageJson = (op: SnOperation): Object => ({
  name: generateNpmName(op.data.name),
  version: '0.3.0',
  license: 'Apache-2.0',
  author: 'daniel@woss.io',
  main: 'lib/index.js',
  types: 'lib/index.d.ts',
  files: ['lib/**/*'],
  directories: {
    lib: 'lib'
  },
  publishConfig: {
    access: 'public'
  },
  scripts: {
    build: 'tsc -b .',
    std: 'ts-standard --fix'
  },
  devDependencies: {
    'ts-standard': '^8.0.1',
    typescript: '^3.9.5'
  },
  dependencies: {
    '@sensio/types': '^0.3.0',
    '@polkadot/util': '^3.0.1'
  },

  repository: {
    type: 'git',
    url: 'git+https://gitlab.com/sensio_group/network-js.git'
  },
  bugs: {
    url: 'https://gitlab.com/sensio_group/network-js/issues'
  },
  homepage: 'https://gitlab.com/sensio_group/network-js#readme',
  'ts-standard': {
    ignore: [
      'lib'
    ]
  }
})

export default packageJson