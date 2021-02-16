const Discord = require('discord.js');
const {
    prefix
} = require('../../conf/config.json');
const colors = require('../../conf/colors.json');
module.exports = {
    name: 'help',
    guildOnly: true,
    description: 'help command!',
    execute(message, args, client) {
      const embed = new Discord.MessageEmbed()
        .setTitle('HELP')
        .setDescription('This is the bot help. The prefix is `' + prefix + '`')
        .setColor(colors.pumpkin)

      client.commands.array().forEach((i) => {
        if (i.ownerOnly) return

        if (i.description) {
          embed.addField('`' + i.name + '`', i.description)
        } else {
          embed.addField('`' + i.name + '`', 'There is no description')
        }
      })

      message.channel.send(embed)

      /*  console.log('start')
        let server = message.guild;
        const data = [];
        const {
            commands
        } = message.client;

        if (!args.length) {

        }

        console.log('1')
        const embed = new Discord.MessageEmbed()
            .setTitle(`${server.name} Help`)
            .setColor(colors.mainColor)
            .setDescription(`My Commands\nDon\'t forget that the prefix is \`${prefix}\``)
            .addField("Commands", commands.filter(e => !e.modOnly).map(command => '`' + command.name + '` - ' + command.description).join('\n'))

       /* client.commands.filter(e => !e.modOnly).forEach((i) => {
          embed.addField('`' + i.name + '` - ' + i.description)
        })
*//*
      console.log('2')
        message.channel.send(embed).catch((err) => {
          message.channel.send('```fix\n' + err + '\n```')
        })

      console.log('3')*/

      /*  data.push(embed);

        return message.channel.send(data, {
                split: true
            }); */
},
};