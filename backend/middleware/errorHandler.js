module.exports = (err, req, res, next) => {
  console.error("BACKEND ERROR 👉", err);
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
};
