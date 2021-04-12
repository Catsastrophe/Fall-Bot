const Discord = require('discord.js');

module.exports = {
    name: "embed",
    description: "Send a embed",
    category: "Moderation",
    usage: "embed <message>",
    execute: async (message, args, client) => {
        
        let dark = args.join(" ");
        if (!dark) return message.channel.send("Please supply some content.");
        
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            
            .setTitle("Embed from " + message.author.tag)
            
            .setDescription(dark)
            
            .setTimestamp()
        message.channel.send(embed)
        
    }
}
