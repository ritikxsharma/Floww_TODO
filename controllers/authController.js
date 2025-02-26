const HTTP_STATUS = require("../constants/httpCodes");
const {
  BAD_REQUEST_ERROR,
  NOT_FOUND_ERROR,
} = require("../helpers/customErrors");
const User = require("../models/UserModel");
const { generateToken } = require("../utilities/jwtUtils");
const { comparePassword } = require("../utilities/passwordUtils");

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
const registerUser = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      throw new NOT_FOUND_ERROR("User already exists with username!");
    }

    const newUser = await User.create(req.body);

    res
      .status(HTTP_STATUS.CREATED)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and generate token
 * @access  Public
 */
const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      throw new NOT_FOUND_ERROR("No user found with the username!");
    }

    if (!(await comparePassword(password, user.password))) {
      throw new BAD_REQUEST_ERROR("Invalid credentials!");
    }

    const token = generateToken({ id: user._id });

    res.cookie("token", token, {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    res.status(HTTP_STATUS.OK).json({ message: "login success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
