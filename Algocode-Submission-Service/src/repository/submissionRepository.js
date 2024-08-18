const Submission = require('../models/submissionModel');

class SubmissionRepository {
    constructor() {
        this.submissionModel = Submission;
    }
    async createSubmission(submission) {
        const response = await this.submissionModel.create(submission);
        return response;
    }
    async updateSubmissionStatus(submissionId, newStatus) {
        const updatedSubmission = await this.submissionModel.findByIdAndUpdate(
            submissionId,
            { status: newStatus },
            { new: true, runValidators: true }
        );

        if (!updatedSubmission) {
            throw new Error("Submission not found");
        }
        return updatedSubmission;
    }

}

module.exports = SubmissionRepository