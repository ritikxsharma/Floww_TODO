const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const {
  registerValidations,
  loginValidations,
} = require("../middlewares/validator");

const router = express.Router();

router.route("/register").post(registerValidations(), registerUser);
router.route("/login").post(loginValidations(), loginUser);

module.exports = router;
