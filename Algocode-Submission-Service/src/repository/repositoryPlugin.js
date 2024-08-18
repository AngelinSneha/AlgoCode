const fastifyPlugin = require('fastify-plugin');
const SubmissionRepository = require('./submissionRepository');

async function repositoryPlugin(fastify, options) {
    console.log('$#################', new SubmissionRepository());
    // add data to fastify object
    fastify.decorate('submissionRepository', new SubmissionRepository())
};

module.exports = fastifyPlugin(repositoryPlugin)