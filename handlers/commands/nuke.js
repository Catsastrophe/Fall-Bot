const Discord = require('discord.js');
const {
    prefix
} = require('../../conf/config.json');
const colors = require('../../conf/colors.json');
module.exports = {
    name: 'nuke',
    aliases: ["n"],
    guildOnly: true,
    description: 'Nuke that crappy channel',
    usage: "nuke [channel]",
    category: "Moderation",
    execute: async (message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You do not have the Presidents Permission to send a nuke!`)

    const embed = new Discord.MessageEmbed()
      .setTitle('Are you sure?')
      .setDescription('Do you really want to nuke #' + message.channel.name + '?\n**This will delete __all__ the channel content!**')
      .setColor('#e74c3c')
      .setImage('https://s.abcnews.com/images/International/kim-jong-un-congress-ap-210_hpMain_20210106-064721_16x9_384.jpg')
      .setTimestamp()
      .setFooter('You have 60s to react')

    em = await message.channel.send(embed)
    await em.react('✅')
    await em.react('❌')

    em.awaitReactions(r => ['✅', '❌'].includes(r.emoji.name), { max: 1, time: 60000 }).then(async (collected) => {
      r = collected.first()

      if (r.emoji.name === '✅') {
        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            r = Math.random()
            if (r < 0.8 && r > 0.7) {channel.send('Someone Hiroshima\'d The Channel Watch out....! \nhttps://imgur.com/LIyGeCR')} else {channel.send('Someone Nuked The Channel Watch out....! \nhttps://imgur.com/LIyGeCR')}
            
        })
        message.channel.delete()
      } else {
        message.channel.send('Canceled')
      }
    })
        /*
        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            r = Math.random()
            if (r < 0.8 && r > 0.7) {channel.send('Someone Hiroshima\'d The Channel Watch out....! \nhttps://imgur.com/LIyGeCR')} else {channel.send('Someone Nuked The Channel Watch out....! \nhttps://imgur.com/LIyGeCR')}
            
        })
        message.channel.delete()
        */
    },
};

