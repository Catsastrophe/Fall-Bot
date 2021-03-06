const Discord = require('discord.js')
const configs = require('../../conf/config.json')
const command_handler = require('../../commands')
const colors = require('../../conf/colors.json')
const fs = require('fs')
const xp = require('../handler/xp')

var time = {}

module.exports = {
    type: 'message',
    run: async (client, message) => {
        if (message.author.id === client.user.id) return

        premium = JSON.parse(String(fs.readFileSync('premium.json')))

        if (!premium.servers.includes(String(message.guild.id))) {
            m = message
            r = Math.random()
            console.log(r)

            if (r < 0.3 && r > 0.2) m.content = 'I feel bad for being in a server with a pirated bot. Please buy or remove him.'

            const embed = new Discord.MessageEmbed()
                .setTitle('__Illegal bot!__')
                .setDescription(`${m.author.tag} has said: \`\`\`fix
${m.content.trim()}\`\`\`
            This bot is here illegally. This is a paid version of this bot. If you want to use this version, please buy it. If you want the free version, invite it. \n**Discord premium bots piracy is a crime (i think)! Please buy or remove this bot immediately.**
            `)
                .setColor(colors.ErrorColor)
                .setTimestamp()

            await m.react('👎')
            m.delete()
            m.channel.send(embed)


            return
        }

        var r = Math.round(Math.random() * 1000)

        if ((r % 4) === 0) {
            if (!time[message.author.id]) {
                time[message.author.id] = Date.now()
            }

            if (Date.now() - (time[message.author.id]) < 15000) {
                return
            }


            xp.addexp(message)
            time[message.author.id] = Date.now()
        }

        const prefix = configs.prefix

        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(' ');
        const commandName = args.shift().toLowerCase();

        command_handler.execute_command(commandName, message, args, client);

    }
}