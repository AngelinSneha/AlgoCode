const fastifyPlugin = require('fastify-plugin');
const SubmissionService = require('./submissionService');

async function servicePlugin(fastify, options) {
    console.log('3###########', fastify.submissionRepository);
    // add data to fastify object
    fastify.decorate('submissionService', new SubmissionService(fastify.submissionRepository))
};

module.exports = fastifyPlugin(servicePlugin)