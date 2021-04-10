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
require("./ExtendedMessage");


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

client.guilds.fetch('812514892921438238')
  .then(guild => console.log(guild.name))
  .catch(console.error);
