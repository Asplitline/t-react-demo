const rewireStyledComponents = require('react-app-rewire-styled-components');

/* config-overrides.js */
module.exports = function override (config, env) {
  return rewireStyledComponents(config, env, {
    fileName: true,
    displayName: true,
  })
}