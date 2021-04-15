const {
    MessageEmbed
} = require('discord.js');
const configs = require('../../../conf/config.json');
const {
    FEEDBACK_EMOJI_ID
} = process.env;

module.exports = {
    name: 'feedback',
    guildOnly: true,
    description: 'Give us some feedback',
    usage: "FeedBack <message>",
    category: "info",
    execute: async (message, args, client) => {
        
        try {
            const upchannel = client.channels.cache.get('815520765428498472')
            
            if (!args.length) {
                return message.reply("Hey I love you want to give us some feed-back But you didn't say anything")
            } else {
                const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`${FEEDBACK_EMOJI_ID} | Feedback command used by ${message.author.tag}`)
                    .addField("In:", `${message.guild.name}, ${message.channel.name} (${message.channel.id})`)
                    .addField("Issue:", args.join(" "))
                    .setFooter(`Fall Music v${configs.version}`)
                    .setTimestamp()
                upchannel.send(embed)
                
                await message.react("🇸").catch(console.error);
                await message.react("🇪").catch(console.error);
                await message.react("🇳").catch(console.error);
                await message.react("🇹").catch(console.error);
                await message.react("✅").catch(console.error);
                
                return null;
            }
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    }
}
