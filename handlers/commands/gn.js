const Discord = require('discord.js');

module.exports = {
    name: 'gn',
    asliases: [],
    description: 'It tells you good Night',
    usage: "gn",
    category: "Fun",
    async execute(message, args) {

        message.reply(`Good Night`);

    }
}