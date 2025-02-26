const { validationResult, body } = require("express-validator");

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

const registerValidations = () =>
  validate([
    body("username").notEmpty().withMessage("username is required!"),
    body("password")
      .notEmpty()
      .withMessage("Password is required!")
      .isLength({ min: 5 })
      .withMessage("Password length be atleast 5 characters"),
  ]);

const loginValidations = () =>
  validate([
    body("username").notEmpty().withMessage("username is required!"),
    body("password").notEmpty().withMessage("Password is required!"),
  ]);

module.exports = {
  registerValidations,
  loginValidations,
};
