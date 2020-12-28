const route = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../../tools/jwt/jwt").authenticateToken;
const log = require("../../tools/log/log");

const sendBurger = require("../../db/Schemas/Reviews").addBurgerMiddleware;

route.get("/", (req, res) => {
  res.send("review");
});

route.get("/authen", verifyToken, (req, res) => {
  res.send("authenticated");
});

route.post("/", (req, res) => {

  const token = req.cookies
  console.log(token)
  if (token) {
    console.log(token);
  } else {
    res.status(401).json({
      error: {
        code: 1,
        path: "/review",
        message: "No token was given, Permission denied",
      },
    });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      log("error", `jwt verify error, error: ${err}`);
      res.status(500).json({error:{
        code:2,
        path: "/review",
        message: "JWT has thrown an error, mean while permission denied",
      }})
    }
  });
  // send user response
  res.status(200).json({
    success: {
      code: 1,
      path: "/review",
      message: "Burger successfuly was stored on database",
    },
  });
});

module.exports = route;
