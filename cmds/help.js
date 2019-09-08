const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let help = new Discord.RichEmbed()
        .setTitle("__Commands__")
        .addField("/help", "commands", true)
        .addField("/website", "web odkaz", true)
        .addField("/server", "server info", true)
        .addField("/info", "bot info", true)
        .addField("/serverinfo", "Server info", true)
        .addField("/userinfo", "User info", true)
        .addField("/avatar [name]", "Avatar, name = mention", true)
        .addField("/cat", "Cat image", true)
        .addField("/dog", "Dog image", true)
        .addField("/meme", "Random meme", true)
        .addField("/Colors", "All Colors", true)
        .setColor(0x49F759)
    message.channel.sendEmbed(help);
    return;
}

module.exports.help = {
    name: "help"
}