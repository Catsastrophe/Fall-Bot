const {
    Random
} = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "advice",
    description: "Get some advice",
    usage: "advice",
    category: "Fun",
    execute: async (message, args) => {
        
        r = Math.random()
        
        let data = await random.getAdvice()
        
        // console.log(data)
        message.channel.send(data)
        
    }
}
