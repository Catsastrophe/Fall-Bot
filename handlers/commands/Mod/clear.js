const Discord = require('discord.js');
const {
    prefix
} = require('../../../conf/config.json');
const colors = require('../../../conf/colors.json');
module.exports = {
    name: 'clear',
    guildOnly: true,
    description: 'clear Daniks spam',
    usage: "clear <number 1-100>",
    category: "Moderation",
    execute: async (message, args) => {
    

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing Permissions!");
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number");
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something went wrong... ${err}`));
    

    if (parseInt(args[0]) > 100) {
      x = await message.channel.send('Note: Only deleted 100 messages (that is the limit)')

      setTimeout(() => { x.delete() },
      7000)
    }
  }
}