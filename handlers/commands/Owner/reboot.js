const config = require('../../../conf/config.json');

module.exports = {
    name: 'reboot',
    guildOnly: false,
    ownerOnly: true,
    description: 'reboot the client',
    usage: "reboot",
    category: "Owner",
    execute: async (message, args, client) => {
      if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`lmao are you the Owner? No So why are you trying to use this command...? <:thonking:814600683458265090>`)
        }
await Promise.all([
            client.destroy(),
            client.login(process.env.TOKEN)]
        );
        message.channel.send('Reboot = yes');
    }
}