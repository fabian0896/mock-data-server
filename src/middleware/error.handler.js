module.exports = function errorHandler (error, _req, res, _next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
    return;
  }
  const boomError = boomify(error);
  res.status(boomError.output.statusCode).json(boomError.output.payload);
};