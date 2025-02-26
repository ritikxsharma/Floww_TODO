const HTTP_STATUS = require("../constants/httpCodes");

/**
 * @class CustomError
 * @desc  Base class for custom application errors
 */
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

/**
 * @class BAD_REQUEST_ERROR
 * @desc  400 Bad Request error for invalid client requests
 */
class BAD_REQUEST_ERROR extends CustomError {
  constructor(message = "Bad Request") {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}

/**
 * @class UNAUTHORIZED_ERROR
 * @desc  401 Unauthorized error for missing/invalid credentials
 */
class UNAUTHORIZED_ERROR extends CustomError {
  constructor(message = "Unauthorized Access") {
    super(message, HTTP_STATUS.UNAUTHORIZED);
  }
}

/**
 * @class FORBIDDEN_ERROR
 * @desc  403 Forbidden error for unauthorized actions
 */
class FORBIDDEN_ERROR extends CustomError {
  constructor(message = "Forbidden Access") {
    super(message, HTTP_STATUS.FORBIDDEN);
  }
}

/**
 * @class NOT_FOUND_ERROR
 * @desc  404 Not found error for missing resources
 */
class NOT_FOUND_ERROR extends CustomError {
  constructor(message = "Resource Not Found") {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}

/**
 * @class INTERNAL_SERVER_ERROR
 * @desc  500 Internal Server Error for unexpected issues
 */
class INTERNAL_SERVER_ERROR extends CustomError {
  constructor(message = "Internal Server Error") {
    super(message, HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  BAD_REQUEST_ERROR,
  UNAUTHORIZED_ERROR,
  FORBIDDEN_ERROR,
  NOT_FOUND_ERROR,
  INTERNAL_SERVER_ERROR,
};
