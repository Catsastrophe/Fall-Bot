const catFacts = require('../../json/cat-fact.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'cat-fact',
    guildOnly: true,
    description: 'Get a random cat fact',
    usage: "cat-fact",
    category: "Fun",

  execute: async (message, args) => {

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle('🐱 | **Cat Fact**')

      .setDescription(catFacts[Math.round(Math.random() * (catFacts.length - 1))])
    message.channel.send({ embed });
  }
};