const route = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../../tools/jwt/jwt").authenticateToken;

const burgerPost = require("../../db/Schemas/Reviews").Burger;

route.get("/", (req, res) => {
  res.send("review");
});

route.get("/authen", verifyToken, (req, res) => {
  res.send("authenticated");
});

route.post("/", (req, res) => {
  
  // Get user based on id from mongodb

  // manipulate the burger data

  console.log(req.body.author,req.body.burgerData)

  let newBurgerPost = new burgerPost({
    author: req.body.author,
    body: req.body.burgerData,
    comments: null,
    hidden: false,
    meta: {
      votes: 0,
      favs: 0,
    },
  });

  console.log(newBurgerPost)

  //newBurgerPost.save();
  res.status(200).json({
    success: {
      code: 1,
      path: "/review",
      message: "Burger successfuly was stored on database",
    },
  });
});

module.exports = route;
