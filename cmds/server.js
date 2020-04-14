const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let info = new Discord.RichEmbed()
    .setTitle("Server info")
    .addField("Name", "Atropol-Games", true)
    .addField("Doména", "ms38.hicoria.cloud:-----", true)
    .addField("Verze", "1.8 - 1.15", true)
    .addField("Owner", "Prejvi", true)
    .addField("Hotové servery", "Minigames, Survival, Creative", true)
    .addField("Připravují se", "Skyblock", true)
    .setColor(0x121FEE)
    .setFooter("aktualizováno : 14.4. 2020 v 21:50")
    .setThumbnail("https://i.imgur.com/WSO9P3y.png")
    message.channel.sendEmbed(info);
}

module.exports.help = {
    name: "server"
}