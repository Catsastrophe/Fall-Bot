const Discord = require('discord.js');
const { prefix } = require('../../conf/config.json')
const colors = require('../../conf/colors.json')
const gis = require('g-i-s')

module.exports = {
    name: 'img',
    guildOnly: true,
    description: 'search google images',
    execute: async (message, args, client) => {
      const search = args.join(' ')

      if (search.length < 1) return message.channel.send('Please specify a search querry')

      gis(String(search), (err, results) => {
        if (err) return message.channel.send('Err: ' + err)
      }) 

      const embed = new Discord.MessageEmbed()
        .setTitle(search)
        .setImage(results[0].url)
        .setTimestamp()
        .setFooter(results[0].width + ' x ' + results[0].height)

      message.channel.send(embed)

  }
}