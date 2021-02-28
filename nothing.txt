const configs = require('../../conf/config.json');
const command_handler = require('../../commands');
const slash_command_handler = require('../../slash_commands');
const Discord = require('discord.js');
const colors = require('../../conf/colors.json');

module.exports = {
    type: 'ready',
    async run(client) {

        console.log(`[API] Logged in as ${client.user.tag}: ` + '| version: ' + configs.version);

        command_handler.initCommands(client);
        slash_command_handler.initSlashCommands(client);
        let statuses = [
            `${configs.prefix}help`,
            `:3`,
            `<3 Thanks for helping danik and linkel`,
            `DarkerInk Is God`,
            `Go To https://snowmusic.gq to get me!`,
            `I am being coded on OwO`,
            `How are you today?`,
            `Cats or Dogs?`,
            `Discord Is Watching You....`,
            `Worship Cthulhu 6 times a day`,
            `Serving ${client.guilds.cache.size} Servers`
        ]
    
        setInterval(() => {
            let status = statuses[Math.floor(Math.random() * statuses.length)]
            client.user.setActivity(status, {
                type: 'WATCHING'
            });
        }, 15000)

          const upchannel = client.channels.cache.get('814718112296337439')
  const upembed = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL())
  .setColor(colors.Emerald)
  .setTitle("Bot restart Notification")
  .setDescription("The Bot is back Online, Go back to using Fall Music! Or this is just a test Message tbh idk anymore")
  upchannel.send(upembed)
    
    }
}