const Discord = require('discord.js');
const { inspect } = require('util');
const fs = require('fs')
const {
    prefix
} = require('../../conf/config.json');
const colors = require('../../conf/colors.json');
const config = require('../../conf/config.json');

module.exports = {
    name: 'reload',
    guildOnly: false,
    ownerOnly: true,
    description: 'Reload the commands',
    usage: "reload <command>",
    category: "Owner",
    execute: async (message, args, client) => {
      if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`lmao are you the Owner? No So why are you trying to use this command...? <:thonking:814600683458265090>`)
        }
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  const commandName = args[0];
  // OMG
  if(!client.commands.has(commandName)) {
    return message.reply("That command does not exist");
  }

  // IT WORKS
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // YESSSSS
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`The command ${commandName} has been reloaded`);
    }
}
//I AM HAPPY 