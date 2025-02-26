const HTTP_STATUS = require("../constants/httpCodes");
const {
  BAD_REQUEST_ERROR,
  NOT_FOUND_ERROR,
} = require("../helpers/customErrors");
const User = require("../models/UserModel");
const { generateToken } = require("../utilities/jwtUtils");
const { comparePassword } = require("../utilities/passwordUtils");

const registerUser = async (req, res, next) => {
  try {
    const { username } = req.body;

    if (!username) {
      throw new BAD_REQUEST_ERROR("missing email/password!");
    }

    const user = await User.findOne({ username });

    if (user) {
      throw new NOT_FOUND_ERROR("User already exists with email!");
    }

    const newUser = await User.create(req.body);

    res
      .status(HTTP_STATUS.CREATED)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new BAD_REQUEST_ERROR("Missing credentials!");
    }

    const user = await User.findOne({ username });

    if (!user) {
      throw new NOT_FOUND_ERROR("No user exists with this email!");
    }

    if (!comparePassword(password, user.password)) {
      throw new BAD_REQUEST_ERROR("Invalid credentials!");
    }

    const token = generateToken({ username });

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
