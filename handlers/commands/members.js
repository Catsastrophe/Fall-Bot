const discord = require("discord.js");

module.exports = {
  name: "membercount",
  description: "How Many members let me think....",
  execute: async (message, args, client) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(
    `
Total Members - ${message.guild.memberCount}
Humans - ${message.guild.members.cache.filter(m => !m.user.bot).size}
Bots - ${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
  }
}