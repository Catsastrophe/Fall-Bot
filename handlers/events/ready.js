const configs = require('../../conf/config.json');
const slash_command_handler = require('../../slash_commands');
const Discord = require('discord.js');
const colors = require('../../conf/colors.json');

module.exports = {
    type: 'ready',
    async run(client) {

        console.log(`[API] Logged in as ${client.user.tag}: ` + '| version: ' + configs.version);

        slash_command_handler.initSlashCommands(client);
        let statuses = [
            `Hello From the otherside`,
            `:3`,
            `This is a premium Bot`,
            `DarkerInk Is God`
        ]

        setInterval(() => {
            let status = statuses[Math.floor(Math.random() * statuses.length)]
            client.user.setActivity(status, {
                type: 'WATCHING'
            });
        }, 15000)

    }
}