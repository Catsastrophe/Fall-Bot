const Discord = require('discord.js');
const colors = require('./conf/colors.json');
const fs = require('fs');

module.exports = {
    async initCommands(client) {
        client.commands = new Discord.Collection();

        const commandFiles = (await fs.promises.readdir('./handlers/commands', { encoding: "utf-8" })).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`./handlers/commands/${file}`);
            try {
                client.commands.set(command.name, command);
            } catch (err) {
                console.error(err);
            }
        }
    },
    async execute_command(commandName, message, args, client) {

        const command = client.commands.get(commandName) ||
            client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) return;

        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            const ID = "814736327286194186";
            const channel = client.channels.cache.get(ID);
            if (!channel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle('A Problem Occured!')
                .setColor(colors.errorColor)
                .addField('Error:', error)

            channel.send(embed);
        }
    }
}
