const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name: "snipe",
    description: "Get the last message that was deleted",
    usage: "snipe",
    execute: async (message, args, client) => {
    // hello dark "...... GASP"

    var obj = JSON.parse(String(fs.readFileSync('./snipe.json')))

    if (obj[message.guild.id]) {
      const msg = obj[message.guild.id]

      const embed = new Discord.MessageEmbed()
        .setTitle('Sniped message')
        .addField('Author', `<@${msg.authorID}>`)
        .addField('Channel', `<#${msg.channelID}>`)
        .addField('Embeds', msg.embeds.length, true)
        .addField('Attachments', msg.attachments.length, true)
        .addField('Content', `
        > ${msg.content}
        `)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        .setColor('RANDOM')

      message.channel.send(embed)
     // message.channel.send(`From <@${msg.authorID}>
  //  Channel: <#${msg.channelID}>
   //   > ${msg.content}
   //   `)
    } else {
      message.channel.send('No message found in this guild!')
    }
}
}