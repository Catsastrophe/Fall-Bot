const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: "nick",
    category: "Moderation",
    description: "Change the Nickname of a given user",
    execute: async (message, args) => {
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change nicknames!');
        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply("You haven't the permission to execute this command!");
        let mentionMember = message.mentions.members.first();
        
        let newNickname = args.slice(1).join(' ');
        if (!mentionMember) return message.reply("Mention the user you want to change the nickname");
        if (!newNickname) return message.reply("Input the new nickname for the user you mentioned");
        if (!mentionMember.kickable) return message.reply("Can't change nickname of this user, does he have a higher role? Is the server creator? Have I got the permission to change his nickname?");
        try {
            mentionMember.setNickname(newNickname);
        } catch (error) {
            message.reply("Can't change nickname of this user, does he have a higher role? Is the server creator? Have I got the permission to change his nickname?");
        }
        message.channel.send(`Changed nickname of ${mentionMember} to **${newNickname}**`);
    }
}
