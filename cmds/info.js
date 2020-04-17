const Discord = require("discord.js");

var version = '1.1.0';

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Bot Info')
    .addField('Bot name', 'Atropol Bot', true)
    .addField('Version', '1.2.0', true)
    .addField('Server', message.guild.name, true)
    .addField('Autor', 'Prejvi Crew', true)
    .setColor(0x49F759)
    .setThumbnail('https://i.imgur.com/nUpTq4a.png')
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "info"
}