const Discord = require('discord.js');
const configs = require('./conf/config.json');
const event_handler = require('./event');

const client = new Discord.Client();

event_handler.performEvents(client);

client.login(process.env.TOKEN)

/*
* Hello
* - danik, 2021
*/