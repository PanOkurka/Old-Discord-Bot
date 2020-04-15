const Discord = require("discord.js");

var version = '1.1.0';

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Bot Info')
    .addField('Bot name', 'Atropol BOT', true)
    .addField('Version', version, true)
    .addField('Server', message.guild.name, true)
    .addField('Autor', 'Pan_Okurka#2764', true)
    .setColor(0x49F759)
    .setThumbnail('https://i.imgur.com/uxnN2WW.png')
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "info"
}