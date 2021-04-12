const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "roles",
    description: "Get All the roles in a server",
    aliases: [],
    usage: "",
    category: "info",
    execute: async (message, args, Fall) => {
        try {
            
            const members = message.guild.members.cache;
            const channels = message.guild.channels.cache;
            const emojis = message.guild.emojis.cache;
            let rolemap = message.guild.roles.cache
            
            
            var rc = 0
            const roles = message.guild.roles.cache
                .filter(r => r.id !== message.guild.id)
                .map(r => r).join(", ") || 'none';
            
            for (let i = 0; i < roles.length; i += 2000) {
                const toSend = roles.substring(i, Math.min(roles.length, i + 2000));
                let embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Roles`)
                    .setDescription(`${toSend}, @everyone`)
                message.channel.send(embed)
            }
        } catch (error) {
            message.reply(`There was an using this command, \n\n**${error.stack}**`);
        }
    }
}
