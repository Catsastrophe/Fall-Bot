const { formatDate } = require("../../info");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "oldest",
  category: "info",
  description: "Get the oldest account creation date in the guild!",
  execute: async ( message, bot, args) => {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => a.user.createdAt - b.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`The oldest member in ${message.guild.name}`)
      .setColor(`RANDOM`)
      .setFooter(`Date format: DD/MM/YYYY (the correct format ;) )`)
      .setDescription(
        `${mem.user.tag} is the oldest user in ${
          message.guild.name
        }! \n\nAccount creation date: ${formatDate(mem.user.createdAt)}`
      );
    message.channel.send(Embed);
  },
};