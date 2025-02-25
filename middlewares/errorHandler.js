const errorHandler = (err, req, res, next) => {
  const errorCode = err.statusCode || 500;
  const env = process.env.NODE_ENV || "production";
  
  res.status(errorCode).json({
    message: err?.message || `Internal Server Error`,
    stack: env === "development" ? err.stack : undefined,
  });
};

module.exports = errorHandler;
