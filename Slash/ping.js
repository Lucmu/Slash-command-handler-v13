const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("mira mi ping"),
  async run(client, interaction){
    interaction.reply({ content: `${client.ws.ping}ms` });
  };
};
