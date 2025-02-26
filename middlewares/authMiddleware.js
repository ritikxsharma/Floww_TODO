const {
  UNAUTHORIZED_ERROR,
  NOT_FOUND_ERROR,
  FORBIDDEN_ERROR,
} = require("../helpers/customErrors");
const Task = require("../models/TaskModel");
const { verifyToken } = require("../utilities/jwtUtils");

/**
 * @middleware  authenticateUser
 * @desc        Middleware to authenticate users using JWT token
 * @access      Private (Requires a valid authentication token)
 */
const authenticateUser = (req, res, next) => {
  try {
    const { token } = req.cookies;

    // Check if the authentication token exists
    if (!token) {
      throw new UNAUTHORIZED_ERROR("Authentication token missing!");
    }

    //Verify and decode the token
    const decoded = verifyToken(token);
    req.user = decoded; //Attach the user info to request object

    next(); //Proceed to next middleware or route handler
  } catch (error) {
    next(error); //Pass the error to global error handler
  }
};

/**
 * @middleware  isTaskOwner
 * @desc        Middleware to check if the logged-in user is the owner of task
 * @access      Private (Requires Authentication and Task Ownership)
 */
const isTaskOwner = () => {
  return async (req, res, next) => {
    try {
      const taskId = req.params.id;
      const userId = req.user.id;

      //Fetch the task by ID
      const task = await Task.findById(taskId);

      //Check if the task exists
      if (!task) {
        throw new NOT_FOUND_ERROR("Task not found!");
      }

      //Verify that the logged-in user is the owner of the task
      if (task.user.toString() !== userId) {
        throw new FORBIDDEN_ERROR(
          "Not authorized to perform action on this task!"
        );
      }

      next(); //Proceed to the next middleware or route handler
    } catch (error) {
      next(error);  //Pass the error to the global error handler
    }
  };
};

module.exports = {
  authenticateUser,
  isTaskOwner,
};
