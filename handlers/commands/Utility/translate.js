const {
    MessageEmbed
} = require('discord.js');
const translate = require('@k3rn31p4nic/google-translate-api');

module.exports = {
    name: "translate",
    description: "Translates a specific text. A language (e.g. English, German, French, etc.) must be added to specify a language to translate to.",
    category: "Utility",
    usage: "translate <Language> <Text>",
    execute: async (message, args) => {
        try {
            if (args.length < 2) {
                return message.reply("Command Usage: `translate <Language> <Text>`")
            }
            
            const result = await translate(args.slice(1).join(' '), {
                to: args[0]
            });
            
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(` **TRANSLATING** \`\`\` ${result.text} \`\`\` `)
                .setFooter(`Command Used By: ${message.author.tag} | Translating  ${result.from.language.iso.toUpperCase()} to ${args[0].toUpperCase()}`);
            message.channel.send({
                embed
            });
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    }
}
