const Discord = require('discord.js');
const colors = require('./conf/colors.json');
const fs = require('fs');

module.exports = {
    async receive(client, slash_command) {

        client.ws.on('INTERACTION_CREATE', async interaction => {

            if (slash_command.name != null) {

                const args = interaction.data.options;

                /*client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            content: slash_command.content
                        }
                    }
                })*/

                if(interaction.data.name == slash_command.name) slash_command.run(interaction, args, client);
                
            }

        })

    },
    async initSlashCommands(client) {
        const slashCommandFiles = (await fs.promises.readdir('./handlers/slash_commands', {
            encoding: "utf-8"
        })).filter(file => file.endsWith('.js'));

        for (const file of slashCommandFiles) {
            const slash_command = require(`./handlers/slash_commands/${file}`);
            try {
                client.api.applications(client.user.id).commands.post({
                    data: {
                        name: slash_command.name,
                        description: slash_command.description,
                        options: slash_command.options
                    }
                })

                this.receive(client, slash_command);
            } catch (err) {
                console.error(err);
            }
        }
    },
}