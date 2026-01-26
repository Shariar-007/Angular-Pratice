// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
//
// module.exports = withModuleFederationPlugin({
//
//   remotes: {
//     "todo": "http://localhost:4201/remoteEntry.js",
//   },
//
//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },
//
// });


const path = require('path');
const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

const sharedMappings = new SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.json'), ['shared-lib',]);

module.exports = withModuleFederationPlugin(
  {
    remotes: {
      todo: 'http://localhost:4201/remoteEntry.js',
    },
    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      ...sharedMappings.getDescriptors(),
    },
  },
  sharedMappings.getPlugin()
);

