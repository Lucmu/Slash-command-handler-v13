const Discord = require('discord.js');
const { Intents, Options } = require('discord.js');

const client = new Discord.Client({ 
    partials: [
      "CHANNEL",
      "GUILD_MEMBER",
      "GUILD_SCHEDULED_EVENT",
      "MESSAGE",
      "REACTION",
      "USER"
    ],
    intents: [
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_PRESENCES
    ]
});

for(const file of fs.readdirSync("./Eventos")){
  if(file.endsWith(".js")){
      let fileName = file.substring(0, file.length - 3);
      let fileContents = require(`./Eventos/${file}`);
      let eventName = file.split(".")[0];
      client.on(fileName, fileContents.bind(null, client));
  };
};

client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./Slash").filter(file => file.endsWith("js"));

for (const file of slashcommandsFiles) {
  const slash = require(`./Slash/${file}`);
  console.log(`Slash Commands - ${file} cargado.`);
  client.slashcommands.set(slash.data.name, slash);
};

client.login(require("./config.json").token);
module.exports = client;
