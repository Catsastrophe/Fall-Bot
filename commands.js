const Discord = require('discord.js');
const colors = require('./conf/colors.json');
const fs = require('fs');

module.exports = {
    async execute_command(commandName, message, args, client) {
        
        const command = client.commands.get(commandName) ||
            client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
        if (!command) return;
        
        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
        }
    }
}
