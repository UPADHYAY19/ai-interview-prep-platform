const Submission = require("../models/Submission");
const Problem = require("../models/Problem");
const runCode = require("../services/codeExecutor");


// Create new submission
exports.createSubmission = async (req, res) => {
  try {

    const { problem, code, language } = req.body;

    // get problem testcases
    const problemData = await Problem.findById(problem);

    if (!problemData) {
      return res.status(404).json({ message: "Problem not found" });
    }

    const testcases = problemData.testcases;

    let status = "Accepted";

    for (let testcase of testcases) {

      const input = testcase.input;
      const expectedOutput = testcase.output;

      const output = await runCode(code, language, input);

      if (output.trim() !== expectedOutput.trim()) {
        status = "Wrong Answer";
        break;
      }
    }

    const submission = await Submission.create({
      user: req.user.userId,
      problem,
      code,
      language,
      status,
      executionTime: Math.floor(Math.random() * 100),
      memoryUsed: Math.floor(Math.random() * 50)
    });

    res.status(201).json({
      message: "Submission evaluated",
      result: status,
      submission
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get all submissions
exports.getAllSubmissions = async (req, res) => {
  try {

    const submissions = await Submission
      .find()
      .populate("user", "name email")
      .populate("problem", "title difficulty");

    res.json(submissions);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get submissions of logged-in user
exports.getUserSubmissions = async (req, res) => {
  try {

    const submissions = await Submission
      .find({ user: req.user.userId })
      .populate("problem", "title difficulty");

    res.json(submissions);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};