const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const {
  registerValidations,
  loginValidations,
} = require("../middlewares/validator");

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.route("/register").post(registerValidations(), registerUser);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and issue token
 * @access  Public
 */
router.route("/login").post(loginValidations(), loginUser);

module.exports = router;
