const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'todo',

  exposes: {
    './Routes': './projects/todo/src/app/app.routes.ts',
    // './Component': './projects/todo/src/app/remote/remote-entry/remote-entry/remote-entry.ts',
    // './Component': './projects/todo/src/app/app.ts',
  },


  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
