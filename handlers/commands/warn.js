const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
    execute: async (message, args, client) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reason>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You can not warn yourself")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Try to warn the owner...? He made this server HE MADE ME!... well atleast DarkerInk did soooo")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Please provide reason to warn - warn @mention <reason>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 30) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 30 warnings, You may ban them now if this is where you draw the line!`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }
    
  
  } 
}