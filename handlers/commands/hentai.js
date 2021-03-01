const { MessageEmbed } = require('discord.js');
const rp = require('request-promise-native');
const superfetch = require('node-superfetch');
const errors = require('../../json/error.json');

module.exports = {
    name: 'hentai',
    guildOnly: true,
    description: 'One nsfw command',
    usage: "NSFW",
    category: "NSFW", // ewwwww 
    //                      - danik

  execute: async (message, args) => {

    let errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
      if (!message.channel.nsfw) {
        message.react('💢');
        return message.channel.send(errMessage);
      }

      superfetch.get('https://nekos.life/api/v2/img/hentai')
        .end((err, response) => {
          const embed = new MessageEmbed()
            .setTitle("__Hentai__")
            .setImage(response.body.url)
            .setColor('RANDOM')
            .setURL(response.body.url);
        message.channel.send({ embed });
    })
  }
};