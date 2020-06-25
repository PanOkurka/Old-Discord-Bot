const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let help = new Discord.RichEmbed()
        .setTitle("__Commands__")
        .addField("!help", "commands", true)
        .addField("!info", "bot info", true)
        .addField("!serverinfo", "Server info", true)
        .addField("!userinfo", "User info", true)
        .addField("!avatar [name]", "Avatar, name = mention", true)
        .addField("!meme", "Random meme", true)
        .addField("!cat", "Cat image", true)
        .addField("!dog", "Dog image", true)
        .setColor(0xF66704)
    message.channel.sendEmbed(help);
    return;
}

module.exports.help = {
    name: "help"
}