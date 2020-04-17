const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let Perms = new Discord.RichEmbed()
    .setTitle("Permise")
    .addField("Je na dobu", "Nikdy nevyprší", true)
    .addField("Stejne premise jako", "Ultra", true)
    .addField("Před jménem", "Prefix Legendary", true)
    .addField("Discord", "Role Legendary", true)
    .addField("Server", "Připojení na server i když je WH", true)
    .addField("Server", "Připojení na plný server", true)
    .addField("Kity:", "Kit Legendary", true)
    .addField("God na Survivalu", "/god", true)
    .addField("Money", "10 000", true)
    .addField("Coins", "2 000", true)
    .setColor(0x4DFB1E)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(Perms);
    let info = new Discord.RichEmbed()
    .setTitle("SMS = CZ")
    .addField("Cena:", "249 Kč", true)
    .addField("Ve tvaru:", "csmc 249 s248847 jmeno_hrace", true)
    .addField("Na číslo", "90733", true)
    .setColor(0x4DFB1E)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(info);
    let info2 = new Discord.RichEmbed()
    .setTitle("SMS = SK")
    .addField("Cena", "10€", true)
    .addField("Ve tvaru:", "csmc 10 s248847 jmeno_hrace", true)
    .addField("Na číslo:", "8877", true)
    .setColor(0x4DFB1E)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(info2);
    let info3 = new Discord.RichEmbed()
    .setTitle("Karta/PaySafeCard/Bankovní převod = CZ/SK")
    .addField("Odkaz", "https://hicoria.com/vip/gs/248847")
    .setColor(0x4DFB1E)
    .setFooter("aktualizováno : 17.4. 2020 v 13:00")
    message.channel.sendEmbed(info3);
}

module.exports.help = {
    name: "legendary"
}