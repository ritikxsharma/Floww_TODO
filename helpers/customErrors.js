const HTTP_STATUS = require("../constants/httpCodes");

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BAD_REQUEST_ERROR extends CustomError {
  constructor(message = "Bad Request") {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}

class UNAUTHORIZED_ERROR extends CustomError {
  constructor(message = "Unauthorized Access") {
    super(message, HTTP_STATUS.UNAUTHORIZED);
  }
}

class FORBIDDEN_ERROR extends CustomError {
  constructor(message = "Forbidden Access") {
    super(message, HTTP_STATUS.FORBIDDEN);
  }
}

class NOT_FOUND_ERROR extends CustomError {
  constructor(message = "Resource Not Found") {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}

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
