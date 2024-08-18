const TestService = require('../services/submissionService');

async function pingRequest(req, res) {
    console.log('------->', this.testService);
    const response = await this.testService.pingCheck();
    return res.send({ data: response })
}


async function createSubmission(req, res) {
    console.log(req.body);
    const response = await this.submissionService.addSubmission(req.body);
    return res?.status(201).send({
        error: {},
        data: response,
        success: true,
        message: 'Created submission successfully'
    })

}

async function updateSubmission(request, res) {
    const submissionId = request.params.id;
    const updatedSubmission = request.body;
    await this.submissionService.updateSubmission(submissionId, updatedSubmission?.status);
    return res?.status(200).send({ message: 'Submission updated successfully', submission: updatedSubmission });
}

module.exports = { pingRequest, createSubmission, updateSubmission }