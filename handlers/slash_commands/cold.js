const Discord = require('discord.js');
const Utils = require('../../slash_utils.js')

module.exports = {
    name: 'cold',
    description: 'info!',
    options: [{
        "name": "cold",
        "description": "info",
        "type": 3
    }],
    async run(int, args, client) {
        
        Utils.respond(int, "I'm Not even 19 yet and I already wasted my life \n- Darkerink", client)
        
    }
}
