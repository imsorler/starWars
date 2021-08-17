const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
    '@hoc': 'src/hoc',
    '@hooks': 'src/hooks',
    '@routes': 'src/routes',
    '@services': 'src/services',
    '@styles': 'src/styles',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@static': 'src/static',
    '@ui': 'src/components/UI'
  })(config)

  return config
}