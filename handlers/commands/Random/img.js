const Discord = require('discord.js');
const { prefix } = require('../../../conf/config.json')
const colors = require('../../../conf/colors.json')
const gis = require('g-i-s')

const nsfw_array = [
  'porn',
  'hentai',
  'gore',
  'sex',
  'boobs',
  'pussy',
  'sex',
  'nsfw',
  'ass',
  'panties'
]

module.exports = {
    name: 'img',
    aliases: ['image', 'search', 'googleimage', 'imagesearch', 'searchimage'],
    guildOnly: true,
    description: 'search google images',
    usage: "img <message>",
    category: "Fun",
    execute: async (message, args, client) => {
      const search = args.join(' ')

      if (search.length < 1) return message.channel.send('Please specify a search querry')

      if (nsfw_array.includes(search.toLowerCase()) && !message.channel.nsfw) return message.channel.send('You are searching an nsfw term. Please search it in an NSFW channel.')

      x = await message.channel.send('Searching: `' + search + '`')

      gis(String(search), (err, results) => {
        if (err) return message.channel.send('Err: ' + err)

        result = ''
        for (var i = 0; i < results.length; i++) {
          if (results[i].url.startsWith('https://upload.wikimedia.org/') || results[i].url.startsWith('https://images.squarespace-cdn.com/') || results[i].url.includes('%') || results[i].url.includes('\\')) {
            continue
          } else {
            result = results[i]
            break
          }
        }

        // console.log(result)

        const embed = new Discord.MessageEmbed()
        .setTitle(search)
        .setImage(result.url)
        .setTimestamp()
        .setFooter(result.width + ' x ' + result.height)

        message.channel.send(embed)
        x.delete()
      }) 

      

  }
}