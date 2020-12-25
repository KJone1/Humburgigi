const config = require("./config.json");

module.exports.isPassword = (password) => {
  const passConf = config.password;

  if (typeof password !== "string") return false;
  if (
    password.length > passConf.maxLength ||
    password.length < passConf.minLength
  )
    return false;

  return true;
};

module.exports.isUsername = (username) => {
  if (typeof username !== "string") return false;
  return true;
};
