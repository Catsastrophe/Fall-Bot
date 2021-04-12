const Discord = module.require("discord.js");

module.exports = {
    name: 'lock',
    description: 'Lock the channel',
    usage: "lock [channel]",
    category: "Moderation",
    execute: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send('You do not have permission to use this command.').then(m => m.delete({
                timeout: 5000
            }));
        
        message.channel.overwritePermissions([{
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
        }, ], );
        
        const embed = new Discord.MessageEmbed()
            .setTitle("Channel Updates")
            .setDescription(`${message.channel} Got a Padlock added to it `)
            .setColor("RANDOM");
        await message.channel.send(embed);
        message.delete();
    }
}
