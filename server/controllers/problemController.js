const Problem = require("../models/Problem");


// Create new problem
exports.createProblem = async (req, res) => {
  try {

    const problem = await Problem.create(req.body);

    res.status(201).json({
      message: "Problem created successfully",
      problem
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get all problems
exports.getAllProblems = async (req, res) => {
  try {

    const problems = await Problem.find();

    res.json(problems);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get single problem by ID
exports.getProblemById = async (req, res) => {
  try {

    const problem = await Problem.findById(req.params.id);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.json(problem);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};