const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let info = new Discord.RichEmbed()
    .setTitle("Pan_Okurka | Info")
    .addField("IGN", "Pan_Okurka")
    .addField("Dev language", "Node.js, HTML, JS, PHP, CSS")
    .addField("Discord Bot's name's", "Atropol, Baby-Cucumber, Okurka's Test Bot")
    .addField("Mc project", "Atropol-Games")
    .addField("IG", "https://www.instagram.com/panokurka_tomik/")
    .addField("Twitter", "https://twitter.com/Pan_Okurka")
    .setColor(0x0aff2f)
    .setFooter("aktualizováno : 26.6. 2020 v 12:00")
    message.channel.sendEmbed(info);
}

module.exports.help = {
    name: "dev"
}