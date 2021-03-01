const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require("moment-duration-format");

module.exports = {
    name: 'ping',
    asliases: ['pingapi', 'pingdiscord'],
    description: 'Get the ping of the Bot',
    usage: "ping",
    category: "Utility",
    execute: async (message, args, client) => {
try {
      const pingMsg = await message.channel.send("Ping....");
      const embed = new MessageEmbed()
        .setTitle("**Pong**")
        .setColor('RANDOM')
        .addField(':ping_pong: **Ping (Bot)**', `${pingMsg.createdTimestamp - message.createdTimestamp}ms`, true)
        .addField(':satellite: **Ping (API)**', `${Math.round(client.ws.ping)}ms`, true)
        .setTimestamp()
      pingMsg.edit({ embed });
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  }
}