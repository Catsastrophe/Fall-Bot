const Discord = require('discord.js');

module.exports = {
    name: 'queue',
    asliases: [],
    description: 'gn',
    usage: "ping",
    category: "Utility",
    async execute(message, args) {

        const msg = await message.channel.send('Typing...');

        msg.edit(`Good Night`);

    }
}