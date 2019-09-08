const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let info = new Discord.RichEmbed()
    .setTitle("Server info")
    .addField("Name", "Advanced-Craft", true)
    .addField("Doména", "play.advanced-craft.cf", true)
    .addField("Verze", "1.8 - 1.14.3", true)
    .addField("Owner", "TorchyCz", true)
    .addField("Hotové servery", "Lobby, Survival", true)
    .addField("Připravují se", "Minigames, Skyblock, Creative", true)
    .setColor(0x121FEE)
    .setFooter("aktualizováno : 14.8. 2019 v 22:05")
    .setThumbnail("https://i.imgur.com/WSO9P3y.png")
    message.channel.sendEmbed(info);
}

module.exports.help = {
    name: "server"
}