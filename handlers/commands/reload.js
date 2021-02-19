const Discord = require('discord.js');
const fs = require('fs')
const {
    prefix
} = require('../../conf/config.json');
const colors = require('../../conf/colors.json');
const config = require('../../conf/config.json');

module.exports = {
    name: 'reload',
    guildOnly: false,
    ownerOnly: true,
    description: 'reload commands',
    execute: async (message, args, client) => {
    if (!config.owners.includes(message.author.id)) return
            
    client.commands = undefined
   console.log(client.commands)

    client.commands = new Discord.Collection();

        const commandFiles = (await fs.promises.readdir('./handlers/commands', { encoding: "utf-8" })).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            try {
                client.commands.set(command.name, command);
            } catch (err) {
                console.error(err);
            }
        }
    
      message.channel.send('Done')
    }
}