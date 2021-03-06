const discord = require("discord.js")

module.exports = {
    name: "avatar",
    aliases: ["av"],
    category: "Utility",
    usage: "avatar <@mention>",
    description: "Get the avatar of someone",
    execute: async (message, args, client) => {
        
        let target
        
        if (message.mentions.users.first()) {
            target = message.mentions.users.first();
        } else if (args[0]) {
            target = message.guild.members.cache.get(args[0]).user;
        } else {
            target = message.author
        }
        
        let avatar = target.displayAvatarURL({
            dynamic: true,
            size: 1024
        })
        
        let embed = new discord.MessageEmbed()
        
        embed.setDescription(`[Download](${avatar})`)
        embed.setImage(avatar)
        embed.setColor("RANDOM")
        message.channel.send(embed)
        
    }
}
