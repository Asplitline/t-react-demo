const { ReactInspectorPlugin } = require('react-dev-inspector/plugins/webpack')
const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra')


module.exports = override(
  addBabelPlugin([
    'react-dev-inspector/plugins/babel',
    // plugin options docs see:
    // https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
    {
      excludes: [
        /xxxx-want-to-ignore/,
      ],
    },
  ]),
  addWebpackPlugin(
    new ReactInspectorPlugin(),
  ),
)