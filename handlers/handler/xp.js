const db = require("quick.db")

class Util {
    static getLevel(xp, extra = false) {
        let level = 0;
        
        
        while (xp >= Util.getLevelxp(level)) {
            xp -= Util.getLevelxp(level);
            level++
        }
        if (extra) return [level, xp];
        else return level;
    }
    
    
    static getLevelxp(level) {
        // return 5 * Math.pow(level, 2) + 50 * level + 200;
        if (((Math.round((level * 200) - (200 / level)) - level * 100) || 100) <= 0) return 25
        return (Math.round((level * 200) - (200 / level)) - level * 100) || 100
    }
    
    static getInfo(exp) {
        let [level, remxp] = Util.getLevel(exp, true);
        let levelxp = Util.getLevelxp(level);
        
        return {
            level,
            remxp,
            levelxp
        }
    }
    
    static addexp(message) {
        let toadd = Math.floor(Math.random() * 3 + 3);
        let oldxp = db.get(`xp_${message.author.id}_${message.guild.id}`)
        let oldlvl = Util.getLevel(oldxp)
        let newxp = oldxp + toadd;
        let newlvl = Util.getLevel(newxp);
        
        
        if (newlvl > oldlvl)
            message.channel.send(`${message.author}, You just reached level ${newlvl}`)
        db.add(`xp_${message.author.id}_${message.guild.id}`, toadd)
    }
}

module.exports = Util;