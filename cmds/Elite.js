const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let Perms = new Discord.RichEmbed()
    .setTitle("Permise")
    .addField("Je na dobu", "62 Dní", true)
    .addField("fly na Survivalu", "/fly", true)
    .addField("Před jménem", "Prefix Elite", true)
    .addField("Discord", "Role Elite", true)
    .addField("EnderChest na Survivalu", "/ec", true)
    .addField("WorkBench na Survivalu", "/wb", true)
    .addField("Feed na Survivalu", "/feed", true)
    .addField("Home na survivalu", "5x", true)
    .addField("Kity:", "Kit Elite", true)
    .addField("Money", "1 000", true)
    .addField("Coins", "500", true)
    .setColor(0xF91F93)
    .setFooter("aktualizováno : 15.4. 2020 v 10:00")
    message.channel.sendEmbed(Perms);
    let info = new Discord.RichEmbed()
    .setTitle("SMS = CZ")
    .addField("Cena:", "50 Kč", true)
    .addField("Ve tvaru:", "csmc 50 s248847 jmeno_hrace", true)
    .addField("Na číslo", "90733", true)
    .setColor(0xF91F93)
    .setFooter("aktualizováno : 15.4. 2020 v 10:00")
    message.channel.sendEmbed(info);
    let info2 = new Discord.RichEmbed()
    .setTitle("SMS = SK")
    .addField("Cena", "2€", true)
    .addField("Ve tvaru:", "csmc 2 s248847 jmeno_hrace", true)
    .addField("Na číslo:", "8877", true)
    .setColor(0xF91F93)
    .setFooter("aktualizováno : 15.4. 2020 v 10:00")
    message.channel.sendEmbed(info2);
    let info3 = new Discord.RichEmbed()
    .setTitle("Karta/PaySafeCard/Bankovní převod = CZ/SK")
    .addField("Odkaz", "https://hicoria.com/vip/gs/248847")
    .setColor(0xF91F93)
    .setFooter("aktualizováno : 15.4. 2020 v 10:00")
    message.channel.sendEmbed(info3);
}

module.exports.help = {
    name: "elite"
}