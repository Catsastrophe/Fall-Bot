const Discord = require('discord.js');

module.exports = {
    name: 'botrules',
    asliases: [],
    description: 'Get the rules of the Bot',
    usage: "botrules",
    category: "CoreInfo",
    async execute(message, args) {

        const msg = await message.channel.send('Making The Rules....');

        msg.edit(`There are a Few Rules with using Fall Music

1) Abuse
If you are caught abusing this bot It can and Most likely will be removed You will be granted a Full Refund If it is after 3 days

2) Lying
When you Buy this bot you have to make a ticket ||as you already did|| well if you make a new ticket and say X server is your new server without having use remove the old server you will be Banned from using Fall Music and Refunded If it is after 3 days

3) Redeeming Codes/Giveaways
If you win a giveaway and try redeeming a used code you will be Warned and or Banned from using the code and the giveaway will be rerolled :D`);

    }
}