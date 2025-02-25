const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected!"))
    .catch((err) => {
      console.error(`Database connection error: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDB