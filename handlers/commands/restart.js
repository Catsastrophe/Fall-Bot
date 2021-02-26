const config = require('../../conf/config.json');

module.exports = {
    name: "restart",
    category: "Owner",
    execute: async (message, args, client) => {
        if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`lmao are you the Owner? No So why are you trying to use this command...? <:thonking:814600683458265090>`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}