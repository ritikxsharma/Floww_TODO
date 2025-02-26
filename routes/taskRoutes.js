const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");
const {
  authenticateUser,
  isTaskOwner,
} = require("../middlewares/authMiddleware");
const { validateTaskId } = require("../middlewares/validator");

const router = express.Router();

/**
 * @route   /api/tasks
 * @desc    Task management routes (Create & Retrieve)
 * @access  Private (Requires authentication)
 */
router
  .route("/tasks")

  /**
   * @method  POST
   * @desc    Create a new task
   */
  .post(authenticateUser, createTask)

  /**
   * @method  GET
   * @desc    Retrieve all tasks for the authenticated user
   */
  .get(authenticateUser, getTasks);

/**
 * @route   /api/tasks/:id
 * @desc    Task modification routes (Update & Delete)
 * @access  Private (Requires authentication & ownership)
 */
router
  .route("/tasks/:id")

  /**
   * @method  PATCH
   * @desc    Update a task by ID (Only the owner can update)
   */
  .patch(authenticateUser, validateTaskId(), isTaskOwner(), updateTask)

  /**
   * @method  DELETE
   * @desc    Delete a task by ID (Only the owner can delete)
   */
  .delete(authenticateUser, validateTaskId(), isTaskOwner(), deleteTask);

module.exports = router;
