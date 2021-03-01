const { MessageEmbed } = require("discord.js");
const configs = require('../../conf/config.json');
const Discord = require('discord.js');
const color = require('../../conf/colors.json');

module.exports = {
    name: 'version',
    description: 'See what version the bot is on',
    usage: "",
    category: "Utility",
    async execute(message, args) {
    
    const embed = new MessageEmbed()

    .setTitle("**Version**")

    .setDescription(`The version The Bot is on is **${configs.version}**, Thank you for using Fall Music **Premium**, *Enjoy The Music*`)
    
    .setColor(color.Pumpkin)

    .setTimestamp()

    return message.channel.send(embed);
    }
}