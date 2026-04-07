const express = require("express");
const router = express.Router();

const { runCodeHandler } = require("../controllers/runCodeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, runCodeHandler);

module.exports = router;