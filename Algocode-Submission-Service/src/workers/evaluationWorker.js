const { Worker } = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');

function evaluationWorker(queue) {
    new Worker('EvaluationQueue', async job => {
        if (job.name === 'EvaluationJob') {
            try {
                const response = await axios.post('http://localhost:3005/sendPayload', {
                    userId: job.data.userId,
                    payload: job.data
                })
                const submission = job.data;
                await axios.put(`http://localhost:3002/api/v1/submissions/${submission.submissionId}`, {
                    status: submission.response.status
                })
            } catch (error) {
                console.log("ERROR -> ", error)
            }
        }
    }, {
        connection: redisConnection
    })
}

module.exports = evaluationWorker