'use strict';
const Hapi = require('@hapi/hapi');

// configuration options for hapi
const serverConf = {
  port: 8000,
  host: 'localhost',
  routes: {
    validate: {
      failAction: async (request, h, err) => {
        throw err;
      },
    },
  },
};

const server = Hapi.server(serverConf);

// initialize server with all plugins, middleware and configuration
exports.init = async () => {
  const plugins = require('./plugin');
  await server.register(plugins);
  await server.initialize();
  global.logger = server.logger;
  return server;
};

exports.start = async () => {
  await server.start();
  return server;
};

/**
 * Handle Unhandled Rejection
 */
process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

/**
 * Handle Uncaught Exception
 */
process.on('uncaughtException', err => {
  console.error(err, 'Uncaught exception');
  process.exit(1);
});
