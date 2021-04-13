const Discord = require('discord.js')
const colors = require('conf/colors.json')

exports.verify = async (message, text, image = false) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Are you sure?')
        .setDescription(text)
        .addField('__Are you sure?__', '❌ Cancel\n✅ Continue')
        .setTimestamp()
        .setFooter('You have 60 seconds to react')
    
    if (image) embed.setImage(String(image))
    x = await message.channel.send(embed)
    
    await e.react('✅')
    await e.react('❌')
    
    e.awaitReactions(r => ['✅', '❌'].includes(r.emoji.name), {
        max: 1,
        time: 60000
    }).then(async (collected) => {
        r = collected.first()
        
        if (r.emoji.name === '✅') return true
        else return false
    })
}
// ❌ ✅
