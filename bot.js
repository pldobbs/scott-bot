var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});
bot.on("ready", function(evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function(user, userID, channelID, message, evt) {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case "scott-died":
        bot.sendMessage({
          to: channelID,
          message:
            "Yea, the dude is fucking hacking. #reported gg ezpz fucking haxr"
        });
        break;
      case "thomas-died":
        bot.sendMessage({
          to: channelID,
          message:
            "It's casual, I'm not trying. Plus my dog is doing backflips and my cat is driving a motorcycle. Geeze"
        });
        break;
      case "jaso-died":
        bot.sendMessage({
          to: channelID,
          message:
            "Sorry, I couldn't hear. I was listening to music while playing"
        });
        break;
      case "hoot-died":
        bot.sendMessage({
          to: channelID,
          message: "This game is shit, I'm going to play meme games"
        });
        break;
      case "rufio-died":
        bot.sendMessage({
          to: channelID,
          message: "REEEEEEEEEEEEEEEEEEEEEEEEEE"
        });
        break;
      case "peter-died":
        bot.sendMessage({
          to: channelID,
          message:
            "Bronze 3 is the new diamond, gg ezpz noobs get at me. I'm the best glaz NA"
        });
        break;
      case "byron-died":
        bot.sendMessage({
          to: channelID,
          message: "It's like normal dying, but in Canada"
        });
        break;
      case "nick-died":
        bot.sendMessage({
          to: channelID,
          message: "GET FUKT GG GOD DAMMIT HACKER EAT SHIT AND DIE"
        });
        break;
      case "eat":
        bot.sendMessage({
          to: channelID,
          message: " EAT SHIT!"
        });
        break;
      case "panda-died":
        bot.sendMessage({
          to: channelID,
          message:
            "One does not kill Panda, he will hunt you. He will find you. And he will kill you back."
        });
        break;
      case "lmao":
        bot.sendMessage({
          to: channelID,
          message: "HA.HA.HA... shut the fuck up"
        });
        break;
      // Just add any case commands if you want to..
    }
  }
});
