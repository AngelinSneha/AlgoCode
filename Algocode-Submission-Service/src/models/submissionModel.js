const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User id for the submission is missing"],
  },
  problemId: {
    type: String,
    required: [true, "Problem id for the submission is missing"],
  },
  code: {
    type: String,
    required: [true, "Code for the submission is missing"],
  },
  language: {
    type: String,
    required: [true, "Language for the submission is missing"],
  },
  status: {
    type: String,
    // RE - runtime error, TLE - Time limit exceeded, ME - Memory Exceeded, WA - Wrong answer
    enum: ["Pending", "Success", "RE", "TLE", "ME", "WA", "ERROR"],
    default: "Pending",
  },
});

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;
