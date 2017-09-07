const attach = (data) => {
  return (req, res, next) => {
    const authKey = req.headers['x-auth-key'];
    console.log(authKey);
    data.user.findUserByAuthKey(authKey)
      .then((user) => {
        req.user = user;
        next();
      });
  };
};

module.exports = attach;
