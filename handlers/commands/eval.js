const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');
const config = require('../../conf/config.json');
const fs = require('fs')

module.exports = {
    name: 'eval',
    guildOnly: false,
    ownerOnly: true,
    description: 'reload commands UwU',
    category: "Owner",
  execute: async (message, agrs, client) => {
  const args = message.content.split(' ');
  const command = args.shift().toLowerCase();
if (!config.owners.includes(message.author.id)) return
if (!config.evalchanel.includes(message.channel.id)) return
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
  }
    
catch (error) {
      console.log(error);
      message.reply(`there was an error **${error}**`);
    }


  }
};