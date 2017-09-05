module.exports = (err, req, res, next) => {
  err = err.message || err;
  return res.status(404)
    .json({
      msg: err,
    });
};
