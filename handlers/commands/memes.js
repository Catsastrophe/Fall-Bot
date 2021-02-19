const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Fetch = require("node-fetch"); 

module.exports = {
    name: "meme",
    description: "Send A Meme!",
    execute: async (message, args, client) => {

        //Start

        const Reds = [
            "memes",
            "me_irl",
            "dankmemes",
            "comedyheaven",
            "crappydesign"
        ];

        const Rads = Reds[Math.floor(Math.random() * Reds.length)];

        const res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

        const json = await res.json();

        if (!json[0]) return message.channel.send(`Your Life Lmfao`);

        const data = json[0].data.children[0].data;

        const Embed = new MessageEmbed()
            .setColor(Color)
            .setURL(`https://reddit.com${data.permalink}`)
            .setTitle(data.title)
            .setDescription(`Author : ${data.author}`)
            .setImage(data.url)
            .setFooter(`${data.ups || 0} 👍 | ${data.downs || 0} 👎 | ${data.num_comments || 0} 💬`)
            .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};
