require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
const app = express();

/**
 * @desc  Connect to MongoDB database
 */
connectDB();

/**
 * @desc  Initialize Middleware
 */
app.use(cors()); //Enables Cross-Origin Resource Sharing
app.use(express.json()); //Parse JSON request bodies
app.use(cookieParser()); //Parse cookies from requests

/**
 * @desc  API routes
 */
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

/**
 * @route   GET /api/checkHealth
 * @desc    Health check endpoint to verify API Status
 * @access  Public
 */
app.get("/api/checkHealth", (req, res) => {
  res.status(200).json({ message: "API is running..." });
});

/**
 * @desc  Global Error Handler Middleware
 */
app.use(errorHandler);

/**
 * @desc  Start Express Server
 */
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
