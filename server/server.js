const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");   // 👈 add here
const problemRoutes = require("./routes/problemRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const runCodeRoutes = require("./routes/runCodeRoutes");
const app = express();

// connect database
connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);   // 👈 add here
app.use("/api/problems", problemRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/run-code", runCodeRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});