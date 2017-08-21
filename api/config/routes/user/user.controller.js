const { errors } = require('../../err/');

const controller = (data) => {
  const registerUser = (req, res, next) => {
    return data.user.createUser(req.body)
      .then((newUser) => {
        req.login(newUser, (err) => {
          if (err) {
            next(err);
          }
          return res.status(200)
            .json('Successfuly registered and logged in as '
              + newUser.username);
        });
      })
      .catch((err) => {
        next(err);
      });
  };

  const loginUser = (req, res, next) => {
    const username = req.user.username;
    return res.status(200)
      .json({
        msg: `Successfuly logged in as ${username}!`,
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
      .json(req.user);
  };

  const userProfile = (req, res, next) => {
    const username = req.params.username;
    data.user.getProfile(username)
      .then((match) => {
        return res.status(200)
          .json(match);
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
    const newPassHash = req.body.passHash;
    return data.user.updateUser({ user, newPassHash })
      .then((result) => {
        res.status(200)
          .json({
            msg: result,
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
