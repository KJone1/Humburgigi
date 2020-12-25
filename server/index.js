const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

const port = 5000;

require("dotenv").config();

app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_PASSWORD,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());

require("./routes/api").init(app);

app.all("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
