const mongoose = require("mongoose");
const Burger = require('./Schemas/Reviews').Burger

// config string for local mongo
const config = require("../config.json").Mongo;

mongoose.connect(`${config.url}/${config.database}`, { useNewUrlParser: true });


const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  const susu = new Burger({name: 'susu'})

  susu.save()
});
