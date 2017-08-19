const User = require('./user.model');

const userData = (db) => {
  const usersDb = db.collection('users');

  const findUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
      usersDb.findOne({ username }, (err, match) => {
        if (err) {
          return reject(err);
        }
        return resolve(match);
      });
    });
  };

  const findUserByAuthKey = (authKey) => {
    return new Promise((resolve, reject) => {
      return usersDb.findOne({ authKey }, (err, match) => {
        if (err) {
          return reject(err);
        }
        return resolve(match);
      });
    });
  };

  const getOwnProfile = (user) => {
    return new Promise((resolve, reject) => {
      return usersDb.findOne(user, (err, match) => {
        if (err) {
          return reject(err);
        }
        return resolve(match);
      });
    });
  };

  const getProfile = (username) => {
    return new Promise((resolve, reject) => {
      return usersDb.findOne({ username }, (err, match) => {
        if (err) {
          return reject(err);
        }
        return resolve(match);
      });
    });
  };

  const getNewAuthKey = (user) => {
    const newAuthKey = User.newAuthKey(user.username);
    return new Promise((resolve, reject) => {
      return usersDb
        .updateOne(user, {
          $set: { authKey: newAuthKey },
        }, (updateErr, result) => {
          if (updateErr) {
            return reject(updateErr);
          }
          return resolve({ authKey: newAuthKey });
        });
    });
  };

  const createUser = (userDetails) => {
    return findUserByUsername(userDetails.username)
      .then((match) => {
        if (match) {
          throw new Error('Existing user!');
        }
        const newUser = new User(userDetails);
        return new Promise((resolve, reject) => {
          usersDb.insertOne(newUser, (err, result) => {
            if (err) {
              return reject(err);
            }
            return resolve(newUser);
          });
        });
      });
  };

  const updateUser = (userDetails) => {

  };

  return {
    findUserByUsername,
    findUserByAuthKey,
    getNewAuthKey,
    getProfile,
    getOwnProfile,
    createUser,
    updateUser,
  };
};

module.exports = userData;
