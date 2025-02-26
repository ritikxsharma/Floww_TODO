const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

const router = express.Router();

router.route("/tasks").post(createTask).get(getTasks);
router.route("/tasks/:id").patch(updateTask).delete(deleteTask);

module.exports = router;
