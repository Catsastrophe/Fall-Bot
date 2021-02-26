const Discord = require('discord.js');

module.exports = {
    name: 'darkerink',
    description: 'The test command',
    usage: "test",
    category: "Utility",
    async execute(message, args) {

        const msg = await message.channel.send('Thinking....');

        msg.edit(`This is to test if it can read new commands`);

    }
}