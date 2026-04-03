const express = require("express");
const router = express.Router();

const {
  createProblem,
  getAllProblems,
  getProblemById
} = require("../controllers/problemController");

const authMiddleware = require("../middleware/authMiddleware");


// Create problem (protected route)
router.post("/", authMiddleware, createProblem);


// Get all problems
router.get("/", getAllProblems);


// Get problem by ID
router.get("/:id", getProblemById);


module.exports = router;