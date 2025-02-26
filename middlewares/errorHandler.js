/**
 * @middleware  errorHandler
 * @desc        Centralized error handling middleware for the application
 * @access      Global (Handles all the errors in the app)
 */
const errorHandler = (err, req, res, next) => {
  const errorCode = err.statusCode || 500; //Default to 500 if no status code is provided
  const env = process.env.NODE_ENV || "production"; //Get the environment mode

  res.status(errorCode).json({
    message: err?.message || `Internal Server Error`, //Provide the error message
    stack: env === "development" ? err.stack : undefined, //Show stack trace only in development mode
  });
};

module.exports = errorHandler;
