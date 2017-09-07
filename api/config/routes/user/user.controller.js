const { errors } = require('../../err/');

const controller = (data) => {
  const registerUser = (req, res, next) => {
    return data.user.createUser(req.body)
      .then((newUser) => {
        const username = newUser.username;
        const authKey = newUser.authKey;
        return res.status(200)
          .json({
            msg: `Successfuly registered and logged in as ${username}!`,
            user: {
              username,
              authKey,
            },
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const loginUser = (req, res, next) => {
    return data.user.loginUser(req.body)
      .then((user) => {
        const username = user.username;
        const authKey = user.authKey;
        return res.status(200)
          .json({
            msg: `Successfuly logged in as ${username}!`,
            user: {
              username,
              authKey,
            },
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const logoutUser = (req, res, next) => {
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    req.logout();
    return res.status(200)
      .json({
        msg: 'Successfuly logged out!',
      });
  };

  const ownProfile = (req, res, next) => {
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    return res.status(200)
      .json({
        username: req.user.username,
        joined: req.user.joined,
      });
  };

  const userProfile = (req, res, next) => {
    const username = req.params.username;
    data.user.getProfile(username)
      .then((match) => {
        return res.status(200)
          .json({
            username: match.username,
            joined: match.joined,
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  const updateUser = (req, res, next) => {
    if (!req.user) {
      return errors.notLoggedIn(next);
    }
    const user = req.user;
    const { oldPassHash, newPassHash, newPassHashRepeat } = req.body;
    if (user.passHash !== oldPassHash) {
      return next('You must provide your actual current password!');
    }
    if (newPassHash !== newPassHashRepeat) {
      return next('New passwords must match!');
    }
    return data.user.updateUser({ user, newPassHash })
      .then((result) => {
        res.status(200)
          .json({
            msg: 'Successfuly changed password!',
          });
      })
      .catch((err) => {
        next(err);
      });
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
    ownProfile,
    userProfile,
    updateUser,
  };
};

module.exports = controller;
