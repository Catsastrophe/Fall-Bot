const Discord = require('discord.js');
const fs = require('fs')
const {
    prefix
} = require('../../../conf/config.json');
const colors = require('../../../conf/colors.json');
const config = require('../../../conf/config.json');
const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'leaveguild',
    description: 'Load new commands',
    category: "Owner",
    execute: async (message, client, args) => {
        if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`lmao are you the Owner? No So why are you trying to use this command...? <:thonking:814600683458265090>`)
        }
        
        const rgx = /^(?:<@!?)?(\d+)>?$/;
        
        const guildId = args[0];
        
        if (!rgx) {
            return message.channel.send(message, 0, 'Please provide a valid server ID')
        }
        
        const guild = message.client.guilds.cache.get(guildId);
        
        if (!guild) return message.channel.send(message, 0, 'Unable to find server, please check the provided ID');
        
        await guild.leave();
        
        let embed = new discord.MessageEmbed()
            
            .setTitle('Leave Guild')
            .setDescription(`I have successfully left **${guild.name}**.`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        
        
        message.channel.send(embed)
    }
}
