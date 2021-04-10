const { formatDate } = require("../../../info");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "youngest",
  category: "info",
  description: "Get the youngest account creation date in the guild!",
  execute: async (message, bot, client, args) => {
    try {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => b.user.createdAt - a.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`The youngest member in ${message.guild.name}`)
      .setColor(`RANDOM`)
      .setFooter(`Date format: DD/MM/YYYY`)
      .setDescription(
        `${mem.user.tag} is the youngest user in ${
          message.guild.name
        }! \n\nAccount creation date: ${frmatDate(mem.user.createdAt)}`
      );
    message.channel.send(Embed);
  } catch (error) {
            console.error(error);
            const ID = "814736327286194186";
            const channel = client.channels.cache.get(ID);
            if (!channel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle('A Problem Occured!')
                .setColor(colors.errorColor)
                .addField('Error:', error)

            channel.send(embed);

  }
}};