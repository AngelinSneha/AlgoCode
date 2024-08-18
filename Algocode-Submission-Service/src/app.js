const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const repositoryPlugin = require('./repository/repositoryPlugin');


async function app(fastify, options) {
    await fastify.register(require('@fastify/cors'));

    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);

    // register test routes
    await fastify.register(require('./routes/api/apiRoutes'), { prefix: '/api' });
}

// fastify-plugin help to attach plugins to the same fastify instance
module.exports = fastifyPlugin(app);