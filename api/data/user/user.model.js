class User {
  constructor(userData) {
    this.username = userData.username;
    this.usernameLC = userData.username.toLowerCase();
    this.passHash = userData.passHash;
    this.authKey = User.newAuthKey(userData.username);
    this.joined = (new Date()).toISOString();
  }

  static newAuthKey(username) {
    const symbols =
      'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
    const len = symbols.length;
    let output = username;

    const randomInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for (let i = 0; i < 60; i += 1) {
      const index = randomInRange(0, len);
      const symbol = symbols[index];
      output += symbol;
    }

    return output;
  }
}

module.exports = User;
