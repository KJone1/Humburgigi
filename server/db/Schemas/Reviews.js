const mongoose = require("mongoose");

const BurgerSchema = new mongoose.Schema({
  author: String,
  body: {},
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const BurgerPost = mongoose.model("BurgerReview", BurgerSchema);
module.exports = BurgerPost

module.exports.addBurgerMiddleware = (req, res, next) => {
  // Get user based on id from mongodb

  // manipulate the burger data

  let newBurgerPost = new BurgerPost({
    author: req.body.author,
    body: req.body.burgerData,
    comments: null,
    hidden: false,
    meta: {
      votes: 0,
      favs: 0,
    },
  });

  try {
    newBurgerPost.save((err, burger) => {
      if (err) {
        log("error", err);
        res.status(500).json({
          fail: {
            code: 1,
            path: "/review",
            message: "Failed to stored burger post on database",
          },
        });
      } else log("info", `new burger post\r\n${burger}`);
    });
  } catch (error) {
    next(error);
  }
};
