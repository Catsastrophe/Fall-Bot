const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: 'High',
	VERY_HIGH: 'Very High'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = {
    name: "roles",
    description: "Get the server info",
    aliases: ["sein", "infoserver", "sp"],
    usage: "",
    category: "info",
    execute: async (message, args, Fall) => {
      try {

    // const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;
    let rolemap = message.guild.roles.cache


    var roles = ''
    var rc = 0

    message.guild.roles.cache.array().forEach((i) => {roles += `<@&${i.id}>, `; rc++})

		const embed = new MessageEmbed()
			.setTimestamp();


    if (rc > 100 || roles.length > 1023) embed.addField(`Roles [${rc}]`, `You still have wayyy too many roles It goes over the 1024 word length Sorry I just can't show them`)
    else embed.addField(`Roles [${rc}]`, roles.slice(0, -1))
		message.channel.send(embed);
    }
    catch (error) {
      message.reply(`There was an using this command, \n\n**${error}**`);
    }}}