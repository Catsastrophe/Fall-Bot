const Discord = require('discord.js');
const configs = require('./conf/config.json');
const event_handler = require('./event');
const fs = require('fs')

const client = new Discord.Client();

event_handler.performEvents(client);

client.login(process.env.TOKEN)

client.on('message', message => {
   if (message.content.startsWith(configs.prefix)) console.log(message.author.tag + '@' + message.guild.name + ' :: ' + message.content)
   });

client.on('messageDelete', message => {
  var obj = JSON.parse(String(fs.readFileSync('./snipe.json')))

        obj[message.guild.id] = JSON.parse(JSON.stringify(message))
        fs.writeFileSync('./snipe.json', JSON.stringify(obj))
})

/*client.on('message', message => {
   console.log(message.content); 
   });
*/