const Discord = require("discord.js");

module.exports = async (client, interaction) => {
  if (!interaction.isCommand()) return;
  const slashcmd = client.slashcommands.get(interaction.commandName);
  if (!slashcmd) return;
  if (slashcmd) slashcmd.run(client, interaction);
}
