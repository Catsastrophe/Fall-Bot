const db = require("quick.db")

module.exports = {
  name: "staff-warns",
  description: "The Amount have warns you have!",
  usage: "staff-warns <@mention>",
  category: "Moderation",
    execute: async (message, args, client) => {
          if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Hey! You are Not a staff Member! Why would you have Staff Warns?")
    }
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`staff-warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} have **${warnings}** warning(s)`)
  
  
  }
}