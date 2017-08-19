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
    req.logout();
    res.json('something');
  };

  const ownProfile = (req, res, next) => {
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
