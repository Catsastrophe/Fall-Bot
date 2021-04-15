const {
    MessageEmbed
} = require("discord.js");
const Discord = require('discord.js');
const {
    prefix
} = require('../../../conf/config.json');
const colors = require('../../../conf/colors.json');
module.exports = {
    name: 'uptime',
    description: 'Get The uptime of the bot',
    usage: "uptime",
    category: "Utility",
    execute: async (message, args, client) => {
        try {
            let days = Math.floor(client.uptime / 86400000);
            let hours = Math.floor(client.uptime / 3600000) % 24;
            let minutes = Math.floor(client.uptime / 60000) % 60;
            let seconds = Math.floor(client.uptime / 1000) % 60;
            
            const embed = new Discord.MessageEmbed()
                .setTitle('Uptime')
                .setDescription(`${days}d ${hours}h ${minutes}m ${seconds}s`)
                .setColor(colors.Emerald)
                .setTimestamp()
            
            return message.channel.send(embed);
        } catch (error) {
            console.log(error);
            message.reply(`This is rare I have Never seen a error on Uptime ${error.stack}`);
        }
    }
}
