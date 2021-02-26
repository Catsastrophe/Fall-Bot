const Discord = require('discord.js');
const configs = require('./conf/config.json');
const event_handler = require('./event');
const fs = require('fs');
const fetch = require("node-fetch");

const client = new Discord.Client();

event_handler.performEvents(client);

client.login(process.env.TOKEN)

client.on('message', message => {
   if (message.content.startsWith(configs.prefix)) console.log(message.author.tag + ' @' + message.guild.name + ' :: ' + message.content)
   });

client.on('messageDelete', message => {
  var obj = JSON.parse(String(fs.readFileSync('./snipe.json')))

        obj[message.guild.id] = JSON.parse(JSON.stringify(message))
        fs.writeFileSync('./snipe.json', JSON.stringify(obj))
})

client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=DarkerInk#6115&gender=Male`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});

client.guilds.fetch('812514892921438238')
  .then(guild => console.log(guild.name))
  .catch(console.error);


/*client.on('message', message => {
   console.log(message.content); 
   });
*/