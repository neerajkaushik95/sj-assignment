'use strict';
const Pack = require('./package.json');

/**
 * Create plugin array with different-different plugin for register in server
 */
let plugins = [
  {
    plugin: require('hapi-pino'),
  },
];

/**
 * Implement swagger for api documentation
 * Set schemes ['http','https'] for options
 * Host is base url retrieve from env files
 * Grouping by tag name
 * If you want to configure auth in swagger uncomment securityDefinitions
 */
const swaggerOption = {
  schemes: ['http'],
  grouping: 'tags',
  expanded: 'none',
  tags: [],
  info: {
    title: 'API Documentation',
    version: Pack.version,
  },
};

/**
 * concat plugins array with new plugin
 */
plugins = plugins.concat([
  {
    plugin: require('@hapi/inert'),
  },
  {
    plugin: require('@hapi/vision'),
  },
  {
    plugin: require('hapi-swagger'),
    options: swaggerOption,
  },
]);

/**
 * Register all routes in plugins
 * Simply add new routes in routes/index.js file for routing.
 */
const routes = require('./src/routes/index');
plugins = plugins.concat(routes);

module.exports = plugins;
