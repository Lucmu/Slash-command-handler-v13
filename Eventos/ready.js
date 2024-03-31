const Discord = require('discord.js');

module.exports = async (client, interaction) => {
  console.log("Bot encendido con exito");
  const loadslash = require("../slash.js")
  try {
      loadslash();
      console.log("Cargando Nuevos Comandos");
  } catch(err) {
      console.log("No Hay Nuevos Comandos");
  };
};
