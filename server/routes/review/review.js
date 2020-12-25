const route = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require('../../tools/jwt/jwt').authenticateToken

route.get("/", (req, res) => {
  res.send("review");
});

route.get("/authen", verifyToken , (req, res) => {

  res.send("authenticated");
});

route.post("/", (req, res) => {
  res.send("review");
});

module.exports = route;
