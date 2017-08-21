module.exports = {
  notLoggedIn(next) {
    return next(new Error('You have to be logged in for that!'));
  },
  notOwner() {
    throw new Error('You are not the owner!');
  },
  nonExistingThread() {
    throw new Error('This thread does not exist!');
  },
};
