const route = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../../tools/jwt/jwt").authenticateToken;
const log = require("../../tools/log/log");

const sendBurger = require("../../db/Schemas/Reviews").addBurgerMiddleware

route.get("/", (req, res) => {
  res.send("review");
});

route.get("/authen", verifyToken, (req, res) => {
  res.send("authenticated");
});

route.post("/", sendBurger,(req, res) => {

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
