const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("./db/Client");

const port = 5000;

require("dotenv").config();
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));
app.use(
  session({
    secret: process.env.SESSION_PASSWORD,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());

require("./routes/api").init(app);

app.all("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
