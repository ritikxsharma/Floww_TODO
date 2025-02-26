const Task = require("../models/TaskModel");
const HTTP_STATUS = require("../constants/httpCodes");

/**
 * @route   POST /api/tasks
 * @desc    Create a new task
 * @access  Private (Requires Autehntication)
 */
const createTask = async (req, res, next) => {
  try {
    const newTask = await Task.create({
      ...req.body,
      user: req.user.id,
    });

    res
      .status(HTTP_STATUS.CREATED)
      .json({ message: "task created successfully", task: newTask });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/tasks
 * @desc    Get all tasks for the authenticated user with an optional filter (is_completed)
 * @access  Private (Requires Autehntication)
 */
const getTasks = async (req, res, next) => {
  try {
    const { is_completed } = req.query;

    let filter = { user: req.user.id };

    if (is_completed !== undefined) {
      filter.is_completed = is_completed === "true";
    }

    const tasks = await Task.find(filter);

    res.status(HTTP_STATUS.OK).json({ tasks });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   PUT /api/tasks/:id
 * @desc    Update a task by ID
 * @access  Private (Requires Autehntication & Task Ownership)
 */
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(HTTP_STATUS.OK).json({ message: "Task updated", updatedTask });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete a task by ID
 * @access  Private (Requires Autehntication & Task Ownership)
 */
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    res.status(HTTP_STATUS.OK).json({ message: "Task updated", deletedTask });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
