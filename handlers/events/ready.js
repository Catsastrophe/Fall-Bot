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
            `Serving ${client.guilds.cache.size} Servers`,
            `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users`,
            `I said I would catch you if you fall`,
            `DarkerInk Is in a sad place`,
            `Please help him`,
            `The time is soon`,
            `....`,
            `........`
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
  .setDescription("The Bot Crashed Or I restarted Please Do not worry The Owner's will look into this as soon as possible if I keep crashing ping one of the owners/devs")
  upchannel.send(upembed)
    
    }
}