const Discord = require("discord.js");

var version = '1.1.0';

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Bot Info')
    .addField('Bot name', 'Test Bot', true)
    .addField('Version', '1.0.0', true)
    .addField('Server', message.guild.name, true)
    .addField('Autor', 'Pan_Okurka#0001', true)
    .setColor(0x49F759)
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "info"
}