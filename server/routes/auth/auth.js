const route = require("express").Router();
const bcrypt = require("bcrypt");
const uid = require("uuid").v4;
const fs = require("fs");
const jwt = require("jsonwebtoken");

let [fPassword, fUsername] = fs.readFileSync("./user").toString().split("\r\n");

const validator = require("../../tools/validator/validator");

route.get("/", (req, res) => {
  res.send("auth");
});

route.post("/login", async (req, res) => {
  const { password, username } = req.body;

  if (!(await isGigi(req, res, password, username))) return;

  req.session.token = jwt.sign({role: "admin"}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  
  res.status(200).json({
    success: {
      from: "auth",
      path: "/login",
      message: `Logged in, Hello ${username}`,
      code: 1,
    },
  });
});

route.post("/update", async (req, res) => {
  const { password, username, nPassword, nUsername } = req.body;

  if (!(await isGigi(req, res, password, username))) return;

  let newPassword = "";
  let newUsername = "";

  // If password is given hash and save else save previous password
  if (nPassword) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(nPassword, salt);
    newPassword = hash;
  } else {
    newPassword = password;
  }

  if (nUsername) {
    newUsername = nUsername;
  } else {
    newUsername = fUsername;
  }

  let data = `${newPassword}\r\n${newUsername}`;
  try {
    fs.writeFileSync("./user", data);
  } catch (error) {
    res.status(501).json({
      error: {
        from: "auth",
        path: "/update",
        message: "Wasn't able to save changes",
        code: 3,
      },
    });
  }

  // Changing loggin info for runtime
  fPassword = newPassword;
  fUsername = newUsername;

  res.status(200).json({
    success: {
      from: "auth",
      path: "/update",
      message: `Changed user info, Hello ${newUsername}`,
      code: 1,
    },
  });
});

const isGigi = async (req, res, password, username) => {
  // Checking if receiving data is correct
  if (!validator.isPassword(password) || !validator.isUsername(username)) {
    console.log("params are not correct");
    res.status(401).json({
      error: {
        from: "auth",
        path: "/isGigi",
        message: "One or more of the parameters given is invalid",
        code: 1,
      },
    });
    return false;
  }

  // Checking if username is correct
  if (username !== fUsername) {
    res.status(401).json({
      error: {
        from: "auth",
        path: "/isGigi",
        message: "Username or password is not correct",
        code: 2,
      },
    });
    return false;
  }

  // Checking if password is correct
  if (!(await bcrypt.compare(password, fPassword))) {
    res.status(401).json({
      error: {
        from: "auth",
        path: "/isGigi",
        message: "Username or password is not correct",
        code: 2,
      },
    });
    return false;
  }

  return true;
};

module.exports = route;
