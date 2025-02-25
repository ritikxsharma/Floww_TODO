require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

//Default Health Route
app.get("/api/checkHealth", (req, res) => {
  res.status(200).json({ message: "API is running..." });
});

//Start Server
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
