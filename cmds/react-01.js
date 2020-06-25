const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let channel = message.guild.channels.find(`name`, "tutorial")
    const React01 = new Discord.RichEmbed()
    .setColor(0x09ff00)
    .setTitle("Vyber si roly!!")
    .setDescription(`\n CZ -> ✔️ \n\n SK -> ❤️`)
    channel.send(React01).then(async msg => {
        await msg.react("1️⃣");
        await msg.react("2️⃣");
    });

}


module.exports.help = {
    name: "react-01"
}