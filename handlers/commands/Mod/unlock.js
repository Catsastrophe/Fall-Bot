const Discord = module.require("discord.js");

module.exports = {
    name: 'Unlock',
    guildOnly: false,
    description: 'Unlock The Channel',
    usage: "Unlock [channel]",
    category: "Moderation",
        execute: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send('You do not have permission to use this command.').then(m => m.delete({timeout: 5000}));

               message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['SEND_MESSAGES'],
     },
    ],);

   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(` ${message.channel}s Padlock has be removed`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}