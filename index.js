const Discord = require('discord.js');
const configs = require('./conf/config.json');
const event_handler = require('./event');
const fs = require('fs');
const fetch = require("node-fetch");
const prefix = require('./conf/config.json');
const db = require('quick.db')
const colors = require('colors')
require("./ExtendedMessage");


const client = new Discord.Client();
client.commands = new Discord.Collection();

event_handler.performEvents(client);

function getDirectories() {
    return fs.readdirSync("./handlers/commands/").filter(function subFolders(file) {
        return fs.statSync("./handlers/commands/" + file).isDirectory();
    });
}
const commandFiles = fs
    .readdirSync("./handlers/commands/")
    .filter((file) => file.endsWith(".js"));
for (const folder of getDirectories()) {
    const folderFiles = fs
        .readdirSync("./handlers/commands/" + folder)
        .filter((file) => file.endsWith(".js"));
    for (const file of folderFiles) {
        commandFiles.push([folder, file]);
    }
}
for (const file of commandFiles) {
    let command;
    if (Array.isArray(file)) {
        command = require(`./handlers/commands/${file[0]}/${file[1]}`);
    } else {
        command = require(`./handlers/commands/${file}`);
    }
    
    client.commands.set(command.name, command);
    console.log(colors.green(`✅  Success! Loaded Command ${command.name}`));
}

client.on('message', message => {
    if (message.content.startsWith(configs.prefix)) console.log(message.author.tag + ' @' + message.guild.name + ' :: ' + message.content)
});

client.on('messageDelete', message => {
    var obj = JSON.parse(String(fs.readFileSync('./snipe.json')))
    
    obj[message.guild.id] = JSON.parse(JSON.stringify(message))
    fs.writeFileSync('./snipe.json', JSON.stringify(obj))
})
client.login(process.env.TOKEN);
