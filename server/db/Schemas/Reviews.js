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

module.exports.Burger = mongoose.model('BurgerReview', BurgerSchema);
