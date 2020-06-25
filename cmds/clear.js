const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope!");
    if(!args[0]) return message.channel.send("Nope!");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Uklizeno v chatu!`).then(msg => msg.delete(3000));
    });
}

module.exports.help = {
    name: "clear"
}