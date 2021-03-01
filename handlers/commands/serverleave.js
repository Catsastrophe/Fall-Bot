 const Discord = require('discord.js');
const fs = require('fs')
const {
    prefix
} = require('../../conf/config.json');
const colors = require('../../conf/colors.json');
const config = require('../../conf/config.json');

module.exports = {
    name: 'serverleave',
    guildOnly: false,
    ownerOnly: true,
    description: 'Leave the server If they are abusing',
    category: "Owner",
    execute: async (message, args, client) => {
    if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`lmao are you the Owner? No So why are you trying to use this command...? <:thonking:814600683458265090>`)
        }
        if (!message.guild.available) return client.logger.info(`Guild "${message.guild.name}" (${message.guild.id}) is unavailable.`);

        message.reply("Are you sure you want me to leave this guild? I can only be added back by users with the `MANAGE_GUILD` (Manage Server) permission. **(Y/N)**");

        return message.channel.awaitMessages(m => m.author.id === message.author.id, {
            "errors": ["time"],
            "max": 1,
            time: 20000
        }).then(resp => {
            if (!resp) return message.channel.send("Timed out.");
            resp = resp.array()[0];
            const validAnswers = [
                "Y",
                "N",
                "y",
                "n"
            ];
            if (validAnswers.includes(resp.content)) {
                if (resp.content === "N" || resp.content === "n") {
                    return message.channel.send("Yay, looks like I won't be leaving. :D");
                } else if (resp.content === "Y" || resp.content === "y") {
                    message.guild.leave()
                    .then(g => 
                    client.logger.info(`☑️ | Left guild via command: ${g}`))
                    .catch(e => {
                        client.logger.error(e);
                        returnmessage.channel.send(`I tried to leave, but couldn't. An error occurred:\n\```${e.message}\````);
                    });
                }
            }
        });
    }
}