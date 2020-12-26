/*
Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
 */
var config = require("./conf.json");

const dim = "\x1b[2m";

const FgWhite = "\x1b[35m";
const infoColor = "\x1b[34m";
const subColor = "\x1b[36m";

const warnColor = "\x1b[33m";

const errorColor = "\x1b[31m";



module.exports = log = (type, msg) => {
  if (config.DEBUG_LEVEL < 1) return;

  if (typeof type == "string" && (typeof msg == "string" || typeof "object"))
    switch (type) {
      case "help":
        if (config.DEBUG_LEVEL < 2) return;
        console.info(infoColor, INFO, msg);
        // include prints
        getMyDate();
        printStackLine();
        console.log(FgWhite,"$")
      case "info":
        console.info(infoColor, INFO, msg);
        // include prints
        getMyDate();
        printStackLine();
        console.log(FgWhite,"$")

        break;
      case "warn":
        console.warn(warnColor, WARN, msg);
        // include prints
        getMyDate();
        printStackLine();
        console.log(FgWhite,"$")

        break;
      case "error":
        console.error(errorColor, ERROR, msg);
        // include prints
        getMyDate();
        printStackLine();
        console.log(dim,"$")

      default:
        break;
    }
};

const printStackLine = () => {
  var err = new Error();
  const stackArray = err.stack.split(" at ", 50);

  const slice = stackArray.slice(
    config.STACK.RELEVENT_LINES,
    config.STACK.NUM_LINES + config.STACK.RELEVENT_LINES
  ).join("")

  console.info(infoColor, `Last stack line \n`, subColor, slice);
};

const getMyDate = () => {
  date = new Date();
  dateFormat = {
    Date: {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    },
    Time: {
      seconds: date.getUTCSeconds(),
      minutes: date.getUTCMinutes(),
      hours: date.getUTCHours(),
    },
  };

  console.log(
    infoColor,
    "Date:",
    subColor,
    dateFormat.Date,
    infoColor,
    "Time:",
    subColor,
    dateFormat.Time
  );

  delete date;
  return dateFormat;
};

const INFO = "[INFO]:";
const WARN = "[WARN]:";
const ERROR = "[ERROR]:";
