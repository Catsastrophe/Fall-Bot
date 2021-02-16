const Discord = require('discord.js');
const configs = require('../../conf/config.json');
const command_handler = require('../../commands');

module.exports = {
    type: 'message',
    async run(client, message) {

        if(!message.content.startsWith(configs.prefix) || message.author.bot) return;

        const args = message.content.slice(configs.prefix.length).split(' ');
        const commandName = args.shift().toLowerCase();

        command_handler.execute_command(commandName, message, args, client);

    }
}