const passport = require('passport');
const LocalStrat = require('passport-local');

const attach = (data) => {
  // Using local strategy
  passport.use(new LocalStrat({
    usernameField: 'username',
    passwordField: 'passHash',
  },
  (username, passHash, done) => {
    data.user.findUserByUsername(username)
      .then((user) => {
        if (!user || user.passHash !== passHash) {
          done(new Error('Wrong username or password!'), null);
        }
        done(null, user);
      });
  }));

  // Saves user key to session (req.session.passport.user)
  passport.serializeUser((user, done) => {
    return data.user.getNewAuthKey(user)
      .then((match) => {
        if (!match) {
          done(new Error('You have to be logged in for that!'), null);
        }
        done(null, match.authKey);
      });
  });

  // Attaches user object (req.user)
  passport.deserializeUser((authKey, done) => {
    if (!authKey) {
      return done(new Error('You are not logged in!'), null);
    }
    return data.user.findUserByAuthKey(authKey)
      .then((user) => {
        done(null, user);
      });
  });

  return passport;
};

module.exports = attach;
