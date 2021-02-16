const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    asliases: ['pingapi', 'pingdiscord'],
    async execute(message, args) {

        const msg = await message.channel.send('Pinging...');

        msg.edit(`🏓Latency is: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`);

    }
}