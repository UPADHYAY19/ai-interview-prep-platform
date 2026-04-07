// Import required models and services
const Submission = require("../models/Submission");
const Problem = require("../models/Problem");
const runCode = require("../services/codeExecutor");


// ===============================
// Create New Submission
// ===============================
exports.createSubmission = async (req, res) => {
  try {

    // Extract data from request body
    const { problem, code, language } = req.body;

    // Fetch problem details from database
    const problemData = await Problem.findById(problem);

    // If problem does not exist
    if (!problemData) {
      return res.status(404).json({ message: "Problem not found" });
    }

    // Get all testcases for the problem
    const testcases = problemData.testcases;

    // Default submission status
    let status = "Accepted";

    // Store failing testcase details
    let failedTestcase = null;

    // ======================================
    // Run user's code against all testcases
    // ======================================
    for (let testcase of testcases) {

      const input = testcase.input;
      const expectedOutput = testcase.output;

      // Execute user code using executor service
      const output = await runCode(code, language, input);

      // Compare program output with expected output
      if (output.trim() !== expectedOutput.trim()) {

        // Mark submission as wrong answer
        status = "Wrong Answer";

        // Save details of failing testcase
        failedTestcase = {
          input,
          expected: expectedOutput,
          output
        };

        // Stop checking remaining testcases
        break;
      }
    }

    // ======================================
    // Save submission in database
    // ======================================
    const submission = await Submission.create({
      user: req.user.userId, // logged-in user
      problem,               // problem id
      code,                  // submitted code
      language,              // programming language
      status,                // Accepted / Wrong Answer
      executionTime: Math.floor(Math.random() * 100), // mock value
      memoryUsed: Math.floor(Math.random() * 50)      // mock value
    });

    // ======================================
    // Send response
    // ======================================
    res.status(201).json({
      message: "Submission evaluated",
      result: status,
      failedTestcase, // shows testcase details if wrong
      submission
    });

  } catch (error) {

    // Print error in terminal for debugging
    console.error("Submission Error:", error);

    res.status(500).json({
      error: error.message
    });
  }
};



// ===============================
// Get All Submissions (Admin)
// ===============================
exports.getAllSubmissions = async (req, res) => {
  try {

    const submissions = await Submission
      .find()
      .populate("user", "name email")       // populate user info
      .populate("problem", "title difficulty"); // populate problem info

    res.json(submissions);

  } catch (error) {

    console.error("Get All Submissions Error:", error);

    res.status(500).json({
      error: error.message
    });
  }
};



// ===============================
// Get Logged-in User Submissions
// ===============================
exports.getUserSubmissions = async (req, res) => {
  try {

    const submissions = await Submission
      .find({ user: req.user.userId }) // only submissions of current user
      .populate("problem", "title difficulty");

    res.json(submissions);

  } catch (error) {

    console.error("User Submissions Error:", error);

    res.status(500).json({
      error: error.message
    });
  }
};