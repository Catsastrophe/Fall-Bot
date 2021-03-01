const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send("EWWWWW its DarkerInk"))
app.listen(port, () =>
console.log(`Connected To:${port} So yea...`)
)
const Discord = require('discord.js');
const configs = require('./conf/config.json');
const event_handler = require('./event');
const fs = require('fs');
const fetch = require("node-fetch");
const prefix = require('./conf/config.json');
const db = require('quick.db')


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
return message.channel.send(`**Do Not Ping people please!**`);
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

client.on("guildCreate", guild => {

  const { MessageEmbed } = require("discord.js");

  const ID = "814736327286194186";

  const channel = client.channels.cache.get(ID);

  const sowner = guild.owner.user;

  if (!channel) return;

  const embed = new MessageEmbed()

    .setTitle("**I Joined a Server!**")

    .addField(`**SERVER NAME**`, `\`\`\`${guild.name}\`\`\``)

    .addField(`**SERVER ID**`, `\`\`\`${guild.id}\`\`\``)

    .addField(`**SERVER OWNER**`, `\`\`\`${sowner.tag}\`\`\``)

    .addField(`**OWNER ID**`, `\`\`\`${sowner.id}\`\`\``)
 
    .addField(`**CREATED ON**`, `\`\`\`${guild.createdAt}\`\`\``)
  
    .addField(`**MEMBERS**`, `\`\`\`${guild.memberCount}\`\`\``)

     .addField(`**ROLES AMOUNT**`, `\`\`\`${message.guild.roles.cache.size}\`\`\``)
  
    .setTimestamp()

    .setColor("32CD32")

    .setFooter(`Servers Count - ${client.guilds.cache.size}`);

  channel.send(embed);

})
  

client.guilds.fetch('812514892921438238')
  .then(guild => console.log(guild.name))
  .catch(console.error);


/*client.on('message', message => {
   console.log(message.content); 
   });
*/
