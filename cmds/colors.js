const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("No color roles here!")

    let colorsEmbed = new Discord.RichEmbed()
    .setTitle("Colors")
    .setDescription(colors.array().join(" "))

    message.channel.send(colorsEmbed)
}

module.exports.help = {
    name: "colors"
}