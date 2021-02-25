const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    asliases: ['pingapi', 'pingdiscord'],
    description: 'Get the ping of the Bot',
    usage: "ping",
    category: "Utility",
    async execute(message, args) {

        const msg = await message.channel.send('Pinging...');

        msg.edit(`🏓Latency is: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`);

    }
}