const Discord = require('discord.js');

module.exports = {
    name: 'test',
    description: 'The test command',
    usage: "test",
    category: "Utility",
    async execute(message, args) {

        const msg = await message.channel.send('Thinking....');

        msg.edit(`We are Not using the test command atm`);

    }
}