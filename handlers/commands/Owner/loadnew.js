const Discord = require('discord.js');
const fs = require('fs')
const {
    prefix
} = require('../../../conf/config.json');
const colors = require('../../../conf/colors.json');
const config = require('../../../conf/config.json');

module.exports = {
    name: 'loadnew',
    description: 'Load new commands',
    category: "Owner",
    execute: async (message, args, client) => {
        try {
            if (!config.owners.includes(message.author.id)) {
                return message.channel.send(`lmao are you the Owner? No So why are you trying to use this command...? <:thonking:814600683458265090>`)
            }
            
            client.commands = undefined
            console.log(client.commands)
            
            client.commands = new Discord.Collection();
            
            const commandFiles = (await fs.promises.readdir('./handlers/commands', {
                encoding: "utf-8"
            })).filter(file => file.endsWith('.js'));
            
            for (const file of commandFiles) {
                const command = require(`./${file}`);
                try {
                    client.commands.set(command.name, command);
                } catch (err) {
                    console.error(err);
                }
            }
            
            message.channel.send('New commands Have been added')
        } catch (error) {
            message.reply(`There was an error when loading the new commands, \n\n**${error}**`);
        }
    }
}
