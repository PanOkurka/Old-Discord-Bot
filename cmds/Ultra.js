const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let Perms = new Discord.RichEmbed()
    .setTitle("Permise")
    .addField("Je na dobu", "31 Dní", true)
    .addField("Stejne premise jako", "Elite", true)
    .addField("Před jménem", "Prefix Ultra", true)
    .addField("Discord", "Role Ultra", true)
    .addField("fly na Survivalu", "/fly", true)
    .addField("Minigames", "Připojení na plné minihry", true)
    .addField("Chat", "Psaní barevně do chatu", true)
    .addField("Kity:", "Kit Ultra", true)
    .addField("Money", "5 000", true)
    .addField("Coins", "1 000", true)
    .setColor(0xFFBF06)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(Perms);
    let info = new Discord.RichEmbed()
    .setTitle("SMS = CZ")
    .addField("Cena:", "79 Kč", true)
    .addField("Ve tvaru:", "csmc 79 s248847 jmeno_hrace", true)
    .addField("Na číslo", "90733", true)
    .setColor(0xFFBF06)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(info);
    let info2 = new Discord.RichEmbed()
    .setTitle("SMS = SK")
    .addField("Cena", "2€", true)
    .addField("Ve tvaru:", "csmc 3 s248847 jmeno_hrace", true)
    .addField("Na číslo:", "8877", true)
    .setColor(0xFFBF06)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(info2);
    let info3 = new Discord.RichEmbed()
    .setTitle("Karta/PaySafeCard/Bankovní převod = CZ/SK")
    .addField("Odkaz", "https://hicoria.com/vip/gs/248847")
    .setColor(0xFFBF06)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(info3);
}

module.exports.help = {
    name: "ultra"
}