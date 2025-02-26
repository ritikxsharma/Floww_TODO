const mongoose = require("mongoose");

/**
 * @model Task
 * @desc  Task schema for storing user tasks in MongoDB
 */
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    is_completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", schema);
module.exports = Task;
