function errorHandler(err, req, res, next) {
  res.json({ error: err, message: err.message });
}

module.exports = errorHandler;
