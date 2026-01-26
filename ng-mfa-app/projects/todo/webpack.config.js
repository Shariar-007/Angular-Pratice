// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({
//
//   name: 'todo',
//   filename: "remoteEntry.js",
//   exposes: {
//     './Routes': './projects/todo/src/app/app.routes.ts',
//     // './Component': './projects/todo/src/app/remote/remote-entry/remote-entry/remote-entry.ts',
//     // './Component': './projects/todo/src/app/app.ts'
//   },
//
//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },
// });


const path = require('path');
const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

const sharedMappings = new SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.json'), ['shared-lib',]);

module.exports = withModuleFederationPlugin({
    name: 'todo',
    exposes: {'./Routes': './projects/todo/src/app/app.routes.ts',},
    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      ...sharedMappings.getDescriptors(),
    },
  },
  sharedMappings.getPlugin()
);
