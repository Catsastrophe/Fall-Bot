const config = require('../../../conf/config.json');

module.exports = {
    name: "ShutDown",
    category: "Owner",
    aliases: ["shut", "shutdown"],
    execute: async (message, args, client) => {
        if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`This is a Owner Only command why tf are you trying to use it <:thonking:814600683458265090>`)
        }

        await message.channel.send(`Shutting Down The bot...\n\n Bye Guys....!!`)

        process.exit();
    }
}