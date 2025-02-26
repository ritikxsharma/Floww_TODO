const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (payload, expiresIn = "30m") => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn,
  });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken, verifyToken
}
