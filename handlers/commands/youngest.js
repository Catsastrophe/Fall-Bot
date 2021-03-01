const { formatDate } = require("../../info");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "youngest",
  category: "info",
  description: "Get the youngest account creation date in the guild!",
  execute: async (message, client, bot, args) => {
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
        }! \n\nAccount creation date: ${formatDate(mem.user.createdAt)}`
      );
    message.channel.send(Embed);
  }

  catch (error) {
console.log(error);
message.reply(`Oh Nonono This is bad really Bad you got a error Please Dm **DarkerInk#6115** and Supply Him this error Below!! \n\nError: **${error}**`);
    }
  }
};