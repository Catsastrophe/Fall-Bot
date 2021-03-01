const Afks = require('../../database/afkTable.js');


module.exports = {
    name: 'afk',
    guildOnly: true,
    description: 'clear Daniks spam',
    usage: "clear <number 1-100>",
    category: "Moderation",
    execute: async (message, args) => {

	const sender = message.author;

	const afkMessage = args.length > 0 ? args.join(' ') : 'They didn\'t tell us where they went...';


	Afks.sync().then(() =>
		Afks.findAll({
			where: {
				user: sender.id,
			},
		}).then(findresult => {
			if (findresult.length == 0) {
				Afks.create({
					message: afkMessage,
					cooldown: Date.now(),
					user: sender.id
				}).then(() => {
					sender.send('Damn a test message here? Well Gl on being AFK').then(msg => msg.delete(5000).catch());
				}).catch(err => {
					if (err.name == 'SequelizeUniqueConstraintError') {
						Afks.destroy({
							where: {
								user: sender.id,
							},
						}).then((result) => {
							if (result == 1) {
								return message.channel
									.send(
										`Welcome back, ${
											message.member.nickname
												? message.member.nickname
												: message.author.username
										}!`
									)
									.then((delmessage) => delmessage.delete({ timeout: 5000 }))
									.catch('Error sending message.');
							}
						});
					}
					console.error('Afk sequelize error: ', err);
				});
			} else {
				Afks.destroy({
					where: {
						user: sender.id,
					},
				}).then((result) => {
					if (result == 1) {
						return message.channel
							.send(
								`Welcome back, ${
									message.member.nickname
										? message.member.nickname
										: message.author.username
								}!`
							)
							.then((delmessage) => delmessage.delete({ timeout: 5000 }))
							.catch('Error sending message.');
          }
        })
      }
    }))}
}