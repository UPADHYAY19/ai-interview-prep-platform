const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true
    },

    code: {
      type: String,
      required: true
    },

    language: {
      type: String,
      enum: ["cpp", "java", "python", "javascript"],
      required: true
    },

    status: {
      type: String,
      enum: ["Accepted", "Wrong Answer", "Runtime Error", "Compilation Error"],
      default: "Wrong Answer"
    },

    executionTime: {
      type: Number
    },

    memoryUsed: {
      type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);