module.exports = {
    name: "generate-invite",
    description: "Generates an invite link of the current text channel of your Discord server.",
    category: "info",
    usage: "generate-invite [<NO_OF_USES>] [<INVITE_LINK_TIMEOUT_IN_MINUTES>]",
    execute: async (message, args, client) => {
        try {
            let uses = args[0]
            let age = args[1]
            
            let invite = await message.channel.createInvite({
                maxAge: age * 60,
                maxUses: uses
            });
            
            await message.channel.send('Ello.\n' +
                'If you wanna invite friends to this server, share the following invite' +
                ' link with your friends.\n' +
                `https://discord.gg/${invite.code}`);
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    }
}
