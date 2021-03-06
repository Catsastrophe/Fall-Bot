const {
    MessageEmbed
} = require('discord.js');
const {
    stripIndents
} = require("common-tags");

module.exports = {
    name: "report",
    category: "Moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    execute: async (message, args, client) => {
        message.delete()
        
        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if (!rMember)
            return message.reply("Did You mention someone? No? Why Not just do p!report <mention> <reason>").then(m => m.delete({
                timeout: 5000
            }));
        
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("That Person Has Ban Permissions Don't worry!").then(m => m.delete({
                timeout: 5000
            }));
        
        if (!args[1])
            return message.channel.send("Please provide a reason for the report").then(m => m.delete({
                timeout: 5000
            }));
        
        const channel = message.guild.channels.cache.find(c => c.name === "reports")
        
        if (!channel)
            return message.channel.send("Couldn't find a `#reports` channel").then(m => m.delete({
                timeout: 5000
            }));
        
        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**- Member:** ${rMember} (${rMember.user.id})
            **- Reported by:** ${message.member}
            **- Reported in:** ${message.channel}
            **- Reason:** ${args.slice(1).join(" ")}`);
        
        return channel.send(embed);
    }
}
