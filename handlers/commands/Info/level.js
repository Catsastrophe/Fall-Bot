const db = require('quick.db')
const {
    getInfo
} = require("../../handler/xp.js")
const canvacord = require("canvacord");
const Discord = require("discord.js");
module.exports = {
    name: "level",
    aliases: ["lvl", "rank", "xp"],
    description: "Get the level of Author or Mentioned",
    usage: "level [user]",
    category: "info",
    execute: async function(message, args, client) {
        const user = message.mentions.users.first() || message.author;
        
        if (user.id === client.user.id) {
            return message.channel.send("I am on level 100 ;) ")
        }
        
        if (user.bot) {
            return message.channel.send("Bot do not have levels")
        }
        
        let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
        
        const {
            level,
            remxp,
            levelxp
        } = getInfo(xp);
        
        const rank = new canvacord.Rank()
            .setAvatar(user.displayAvatarURL({
                dynamic: false,
                format: 'png'
            }))
            .setCurrentXP(remxp)
            .setRequiredXP(levelxp)
            .setLevel(level)
            .setStatus(user.presence.status)
            .setProgressBar("#00FFFF", "COLOR")
            .setUsername(user.username)
            .setDiscriminator(user.discriminator)
            .setRank(1, "a", false)
            .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/812527311551070208/814410829637222470/banner.png");
        
        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "automodRankcard.png");
                message.channel.send(attachment);
            });
        
        
        
        
    }
}
