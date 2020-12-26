const mongoose = require("mongoose");
const log = require("../tools/log/log");

// config string for local mongo
const config = require("../config.json").Mongo;

mongoose.connect(`${config.url}/${config.database}`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  // we're connected!
  log("info", "MongoDB has been connected successfuly");
});
