const config = require('../../conf/config.json');

module.exports = {
    name: "zcodename0",
    description: 'This Command Is only Useable By DarkerInk Not even The other Owner can use it',
    usage: "Its Not thought of....",
    aliases: ["codename0"],
        category: "CoreInfo",
    execute: async (message, args, client) => {
        if (!config.code0.includes(message.author.id)) {
            return message.channel.send(`Its Not Time Yet`)
        }
// Danik this is just If something happens or something else It DOESN'T mean anything Don't add your Id I will use it if we decide so don't even test it please!!
        await message.channel.send(`Hey Guys..... This Is the last Command that will most likely be used... If This command Was Used It could mean a few things Hopefully DarkerInk will be able to explain But if Not Then It could mean he Gave up this project or is selling this bot well anyway I <3 you all\n\n -Fall Music`)

        process.exit();
    }
}