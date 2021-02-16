const Discord = require('discord.js');
const Utils = require('../../slash_utils.js')

module.exports = {
    name: 'ping',
    description: 'Pong!',
    options: [{
        "name": "test",
        "description": "tesssst",
        "type": 3
    }],
    async run(int, args, client) {
        
        Utils.respond(int, "Ping", client)
        
    }
}