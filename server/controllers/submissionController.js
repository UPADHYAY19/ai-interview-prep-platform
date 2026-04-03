const Submission = require("../models/Submission");


// Create new submission
exports.createSubmission = async (req, res) => {
  try {

    const { problem, code, language } = req.body;

    const submission = await Submission.create({
      user: req.user.userId,
      problem,
      code,
      language,
      status: "Accepted", // temporary (later we will evaluate test cases)
      executionTime: Math.floor(Math.random() * 100),
      memoryUsed: Math.floor(Math.random() * 50)
    });

    res.status(201).json({
      message: "Submission created successfully",
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