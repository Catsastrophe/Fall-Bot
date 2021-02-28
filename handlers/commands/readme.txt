Simple To understand I hope 
when you are making a new command or editing one under 

execute: async (message, args, client) => {



add a try { so it should look like this



execute: async (message, args, client) => {
  try { 




then when you have that do the command then add this at the bottom just before ending the command



} catch (error) {
console.log(error);
message.reply(`Oh Nonono This is bad really Bad you got a error Please Dm **DarkerInk#6115** and Supply Him this error Below!! \n\nError: **${error}**`);
 channel.send(embed);
}
}

So It should Look like This I am using the Ping command as a example


const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    asliases: ['pingapi', 'pingdiscord'],
    description: 'Get the ping of the Bot',
    usage: "ping",
    category: "Utility",
    execute: async (message, args) {
      try {

        const msg = await message.channel.send('Pinging...');

        msg.edit(`🏓Latency is: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`);

    } catch (error) {
console.log(error);
message.reply(`Oh Nonono This is bad really Bad you got a error Please Dm **DarkerInk#6115** and Supply Him this error Below!! \n\nError: **${error}**`);
 channel.send(embed);
}
    }
}

This Is just In case you mess up a command but you didn't get the error when you ran it and so people can report it