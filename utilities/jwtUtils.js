const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * @function    generateToken
 * @desc        Generates a JWT token for authentication
 * @param       {Object} payload - Data to encode in the token (user ID)
 * @param       {String} [expiresIn="30"] - Token expiration time (default: 30 minutes)
 * @returns     {String} JWT token
 */
const generateToken = (payload, expiresIn = "30m") => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn,
  });
};

/**
 * @function    verifyToken
 * @desc        Verifies and decodes a JWT token
 * @param       {String} token - JWT token to verify
 * @returns     {Object|null} Decoded payload if valide, else null
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
