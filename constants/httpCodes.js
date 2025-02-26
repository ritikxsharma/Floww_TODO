const HTTP_STATUS = {
  // Success responses
  OK: 200, //Request successful
  CREATED: 201, //Resource created successfully

  //Client error responses
  BAD_REQUEST: 400, //Invalid client request
  UNAUTHORIZED: 401, //Authentication required
  FORBIDDEN: 403, //Authorization failed
  NOT_FOUND: 404, //Resource not found

  //Server error responses
  INTERNAL_SERVER_ERROR: 500, //Internall server error
};

module.exports = HTTP_STATUS;
