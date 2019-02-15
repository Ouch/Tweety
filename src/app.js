import twitter from "twitter";
import auth from "./auth.json";
import fir from "@unsc/fir";
import parse from "@unsc/parse";
import readline from "readline-sync";
import chalk from "chalk";
import moment from "moment";
import fs from "fs";

// asks for user specified search before searching
let keyword = readline.question(
  "Aye there, an thank you for using Tweety!\n\nWhat would you like Tweety to search for?\n\nI want Tweety to search for: "
);

// checks to see if logs folder exists. If not then creates one, an sends msg to console
try {
  fs.mkdirSync("logs");
  fir.log("logs folder created");
} catch (err) {
  if (err.code == "EEXIST") {
    fir.log("logs folder already exists.. moving forward");
  } else {
    fir.log(err);
  }
}

const date = moment().format("h:mm:ss");

// gives access to fir
fir;
fir.save("logs/latest.log");
fir.format(
  message => `${chalk.green(`INFO`)}: ${chalk.cyan(`${date}`)} ${message}`
);
fir.log("Log has been prettied up with 117's fir package :)");

// twitter application login
let client = new twitter({
  consumer_key: auth.key,
  consumer_secret: auth.secret,
  access_token_key: auth.access_key,
  access_token_secret: auth.access_secret
});

// console.log("command is:", parse.command);

// parse.getCommand();
// parse.getOptions();

// parse.onCommand("tweety start", function(optinos) {
//   // do silly stuff like
//   console.log("");
// });

// parse.on("Tweety start", function() {
//   // start command stuff here
// });

// parse.on("Tweety stop", function() {
//   // stop command stuff
// });

// parse.on("Tweety", function() {
//   // show help menu
// });

/**
 * Checks twitter for any an all tweets / retweets containg the user specified keyword
 */

client.stream("statuses/filter", { track: "#" + keyword }, function(stream) {
  try {
    stream.on("data", function(tweet) {
      fir.log(tweet.text);
    });

    stream.on("error", function(error) {
      fir.log(error);
    });
  } catch (exception) {
    console.log(exception);
  }
});

/**
 * Post a tweet by changing status, an run npm start
 */

// client
//   .post("statuses/update", {
//     status:
//       "When your software works on only the 376th run https://gph.is/11hU9aU"
//   })
//   .then(function(tweet) {
//     fir.log(tweet);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// fir.log("Aye your shit actually worked for once");
