const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
  {
    // Problem title
    title: {
      type: String,
      required: true
    },

    // Problem description
    description: {
      type: String,
      required: true
    },

    // Difficulty level
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true
    },

    // Problem topic (Array, DP, Graph etc)
    topic: {
      type: String,
      required: true
    },

    // ================================
    // Starter code templates
    // ================================
    starterCode: {
      cpp: {
        type: String,
        default: ""
      },
      python: {
        type: String,
        default: ""
      },
      java: {
        type: String,
        default: ""
      }
    },

    // ================================
    // Example inputs shown to users
    // ================================
    examples: [
      {
        input: String,
        output: String,
        explanation: String
      }
    ],

    // ================================
    // Hidden testcases used for judging
    // ================================
    testcases: [
      {
        input: String,
        output: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", problemSchema);