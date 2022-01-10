// These are helper functions file

// Generates a random password based on length inputted by the user
function generatePassword() {
  const userInput = process.argv[2]
  let length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (const i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
module.exports = {generatePassword};
