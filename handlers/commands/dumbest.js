const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');
const config = require('../../conf/config.json');
const fs = require('fs')

module.exports = {
    name: 'dumbest',
    guildOnly: false,
    ownerOnly: true,
    description: 'Find Out how the dumbest person Is',
    category: "Fun",
  execute: async (message, agrs, client) => {
  const args = message.content.split(' ');
  const command = args.shift().toLowerCase();
if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`No Danik Just Stop Agree To the things I asked then you can use this command again Read What I asked In <#812415408694624327>`)
        }
if (!config.evalchanel.includes(message.channel.id)) return
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
  }
    
catch (error) {
      console.log(error);
      message.reply(`There was an error during evaluation, \n\n**${error}**`);
    }
  }
};