const { validationResult, body, param } = require("express-validator");
const { default: mongoose } = require("mongoose");

/**
 * @middleware  validate
 * @desc        Middleware to handle request validation errors
 * @access      Global (User in routes)
 */
const validate = (validations) => {
  return [
    validations,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
      }
      next();
    },
  ];
};

/**
 * @middleware  registerValidations
 * @desc        Validates user registeration request body
 * @access      Public
 */
const registerValidations = () =>
  validate([
    body("username")
      .notEmpty()
      .withMessage("username is required!")
      .isLength({ min: 3, max: 15 })
      .withMessage("Username must be between 3 and 15 characters"),
    body("password")
      .notEmpty()
      .withMessage("Password is required!")
      .isLength({ min: 5, max: 10 })
      .withMessage("Password must be between 3 and 10 characters"),
  ]);

/**
 * @middleware  loginValidations
 * @desc        Validates user login request body
 * @access      Public
 */
const loginValidations = () =>
  validate([
    body("username").notEmpty().withMessage("username is required!"),
    body("password").notEmpty().withMessage("Password is required!"),
  ]);

/**
 * @middleware  taskValidator
 * @desc        Validates task creation request body
 * @access      Private (User must be authenticated)
 */
const taskValidator = () =>
  validate([
    body("title").notEmpty().withMessage("title is required!"),
    body("is_completed")
      .isBoolean()
      .withMessage("is completed must be either true or false!"),
  ]);

/**
 * @middleware  validateTaskId
 * @desc        Validates task ID in request parameters
 * @access      Private (User must be authenticated)
 */
const validateTaskId = () =>
  validate([
    param("id")
      .custom((id) => mongoose.Types.ObjectId.isValid(id))
      .withMessage("Invalid task ID!"),
  ]);

module.exports = {
  registerValidations,
  loginValidations,
  taskValidator,
  validateTaskId,
};
