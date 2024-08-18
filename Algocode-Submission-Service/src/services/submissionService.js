const SubmissionProducer = require("../producers/submissionQueueProducer.Js");
const SubmissionCreationError = require('../errors/submissionCreationError');
const { fetchProblemDetials } = require("../apis/problemAdminApi");

class SubmissionService {
    constructor(submissionRepository) {
        // inject here
        this.submissionRepository = submissionRepository;
    }

    async pingCheck() {
        return 'pong'
    }

    async addSubmission(submissionPayload) {
        //  hit the problem admin service and fetch the problem details
        const problemId = submissionPayload.problemId;
        const userId = submissionPayload.userId;
        const problemAdminApiRes = await fetchProblemDetials(problemId);
        if (!problemAdminApiRes) {
            throw new SubmissionCreationError('Failed to create a submission in the repository');
        }
        const languageCodeStub = problemAdminApiRes.data.codeStubs?.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

        submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;

        const submission = await this.submissionRepository.createSubmission(submissionPayload);
        if (!submission) {
            // TODO: Add error handling here
            throw new SubmissionCreationError('Failed to create a submission in the repository');
        }
        const response = await SubmissionProducer({
            [submission._id]: {
                code: submission.code,
                language: submission.language,
                inputCase: problemAdminApiRes.data.testCases[0].input,
                outputCase: problemAdminApiRes.data.testCases[0].output,
                userId: userId,
                submissionId: submission._id
            }
        });
        return { queueResponse: response, submission };
    }
    async updateSubmission(submissionId, newStatus) {
        await this.submissionRepository.updateSubmissionStatus(submissionId, newStatus);
    }
}

module.exports = SubmissionService