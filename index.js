const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`);
});

bot.on("messageCreate", (msg) => {
  if (msg.content === "!ping") {
    msg.channel.createMessage("Pong!");
  }
});

bot.connect(); // Get the bot to connect to Discord
