const { UNAUTHORIZED_ERROR } = require("../helpers/customErrors");
const { verifyToken } = require("../utilities/jwtUtils");

export const authenticateUser = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new UNAUTHORIZED_ERROR("Authentication token missing!");
    }

    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
