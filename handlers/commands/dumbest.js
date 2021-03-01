const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require("moment-duration-format");

module.exports = {
    name: 'dumb',
    description: 'Get the ping of the Bot',
    usage: "ping",
    category: "Utility",
    execute: async (message, args, client) => {
try {
      const pingMsg = await message.channel.send("Thinking.....");
      const embed = new MessageEmbed()
        .setTitle("**Pong**")
        .setColor('RANDOM')
        .addField('Had To remove it because someone was abusing it')
        .setTimestamp()
      pingMsg.edit({ embed });
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  }
}