const passport = require('passport');
const LocalStrat = require('passport-local');

const attach = (data) => {
  passport.use(new LocalStrat({
    usernameField: 'username',
    passwordField: 'passHash',
  },
  (username, passHash, done) => {
    data.user.findUserByUsername(username)
      .then((user) => {
        if (!user || user.passHash !== passHash) {
          done('Wrong username or password!', null);
        }
        done(null, user);
      });
  }));

  passport.serializeUser((user, done) => {
    return data.user.getNewAuthKey(user)
      .then((match) => {
        if (!match) {
          done('You have to be logged in for that!', null);
        }
        done(null, match.authKey);
      });
  });

  passport.deserializeUser((authKey, done) => {
    if (!authKey) {
      return done('You are not logged in!', null);
    }
    return data.user.findUserByAuthKey(authKey)
      .then((user) => {
        done(null, user);
      });
  });

  return passport;
};

module.exports = attach;
