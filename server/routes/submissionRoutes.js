const express = require("express");
const router = express.Router();

const {
  createSubmission,
  getAllSubmissions,
  getUserSubmissions
} = require("../controllers/submissionController");

const authMiddleware = require("../middleware/authMiddleware");


// Create submission (protected)
router.post("/", authMiddleware, createSubmission);


// Get all submissions
router.get("/", getAllSubmissions);


// Get submissions of logged-in user
router.get("/user", authMiddleware, getUserSubmissions);


module.exports = router;