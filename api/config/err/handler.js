module.exports = (err, req, res, next) => {
  console.log(err.message);
  return res.status(404)
    .json({
      msg: err.message,
    });
};
