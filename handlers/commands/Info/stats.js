const { MessageEmbed } = require('discord.js');
const configs = require('../../../conf/config.json');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: 'stats',
    guildOnly: true,
    description: 'Get the stats of the bot',
    usage: "stats",
    category: "info",
    execute: async (message, args, client) => {

      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    const embed = new MessageEmbed()
      .setTitle("__**Fall Music Stats**__")
      .setColor('RANDOM')
      .addField(':clock4: | **Uptime**', `${duration}`, true)
      .addField(':bar_chart: | **Server Count**', `${client.guilds.cache.size.toLocaleString()}` , true)
      .addField(':chart_with_upwards_trend: | **User Count**', `${client.users.cache.size.toLocaleString()}`, true)
      .addField(':card_box: | **Channel Count**', `${client.channels.cache.size.toLocaleString()}`, true)
      .addField(':chart_with_downwards_trend: | **Memory Usage**', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField(':page_facing_up: | **Version**', `v${configs.version}`, true)
      .setFooter('Copyright ©2020-2021 DarkerInk#6115')
    await message.channel.send({ embed });
    
  }
}