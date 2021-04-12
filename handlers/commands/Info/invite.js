const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "invite",
    aliases: ["inv"],
    category: "Utility",
    
    execute: async function(message, args, client) {
        
        var permissions = 8;
        
        let invite = new MessageEmbed()
            .setTitle(`Invite ${client.user.username}`)
            .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
            .setColor("BLUE")
        return message.channel.send(invite);
    },
};
