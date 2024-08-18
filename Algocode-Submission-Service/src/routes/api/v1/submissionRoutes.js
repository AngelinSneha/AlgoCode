const { createSubmission, updateSubmission } = require("../../../controller/submissionController");

async function submissionRoutes(fastify, options) {
    fastify.post('/', createSubmission);
    fastify.put('/:id', updateSubmission);
};

module.exports = submissionRoutes;