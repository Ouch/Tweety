import twitter from "twitter";
import log from "log";
import auth from "./auth.json";
import pkg from "./package.json";
import chalk from "chalk";
import moment from "moment";
import sleep from "sleep";

/**
 * 117's log package -- wonderfully simple an super useful
 */

log
  .format(function(message) {
    const date = moment().format("h:mm:ss"),
      app = pkg.name;
    return `${date} ${app} ${chalk.green("info")} ${message}`;
  })
  .bind("info");

// apart of twitter login
let client = new twitter({
  consumer_key: auth.key,
  consumer_secret: auth.secret,
  access_token_key: auth.access_key,
  access_token_secret: auth.access_secret
});

// Checks twitter for any an all tweets / retweets contaiing the keyword used in "track" function

client.stream("statuses/filter", { track: "Eminem" }, async function(stream) {
  await sleep(4000);
  stream.on("data", function(tweet) {
    log.info(tweet.text);
  });

  stream.on("error", function(error) {
    log.info(error);
  });
});

/**
 * Post a tweet by changing status, an run npm start
 */

client
  .post("statuses/update", {
    status:
      "When your software works on only the 376th run https://gph.is/11hU9aU"
  })
  .then(function(tweet) {
    log.info(tweet);
  })
  .catch(function(error) {
    throw error;
  });

log.info("Aye your shit actually worked for once");
