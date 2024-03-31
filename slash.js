const fs = require("fs");
const Discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const config = require("./config.json");
const slashcommandsFiles = fs.readdirSync("./Slash").filter(file => file.endsWith("js"));
const commands = [];

for (const file of slashcommandsFiles){
  const slash = require(`./Slash/${file}`);
  commands.push(slash.data.toJSON());
};

const rest = new REST({ version: "9" }).setToken(config.token);
createSlash();

async function createSlash(){
  try {
    await rest.put(Routes.applicationCommands(config.botId), { body: commands });
    console.log("Nuevos Comandos Actualizados");
  } catch(e) {
    console.log("Nuevos Comandos NO Actualizados");
    console.log(e);
  };
};
