const submissionQueue = require("../queues/submissionQueue");
async function SubmissionProducer(payload) {
    await submissionQueue.add("SubmissionJob", payload);
    console.log("Successfully added a new submission job");
}
module.exports = SubmissionProducer;