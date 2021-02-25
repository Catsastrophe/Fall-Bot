const db = require("quick.db")

module.exports = {
  name: "warns",
  description: "Get the warns of yours or mentioned person",
  usage: "warns (<@mention>)",
  category: "Moderation",
    execute: async (message, args, client) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} have **${warnings}** warning(s)`)
  
  
  }
}