const { MessageEmbed } = require("discord.js")
const config = require('../../conf/config.json');
const db = require("quick.db")

module.exports = {
  name: "staff-warn",
  usage: "staff-warn <@mention> <reason>",
  description: "Warn a Staff Member that does Not follow their rules",
  category: "Moderation",
    execute: async (message, args, client) => {
        if (!config.warnstaff.includes(message.author.id)) {
            return message.channel.send(`You can Not warn staff Sorry`)
        }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Oh Not you messed up the command up - staff-warn @mention <reason>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Are Bots staff members? I have Never checked tbh")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("DarkerInk or Danik Why tf are you trying to warn yourself?")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Really Danik? Trying to warn Darkerink?")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Please provide reason to warn - staff-warn @mention <reason>")
    }
    
    let warnings = db.get(`staff-warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 5) {
      return message.channel.send(`${message.mentions.users.first().username} oh no why did you not read the rules? Well Better hope Darkerink or danik go easy on you :/`)
    }
    
    if(warnings === null) {
      db.set(`staff-warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Oh No you already have a staff warn? well here is why in **${message.guild.name}** you got warned for **${reason}**`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`staff-warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`Oh No you already have a staff warn? well here is why in **${message.guild.name}** you got warned for **${reason}**`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }
    
  
  } 
}