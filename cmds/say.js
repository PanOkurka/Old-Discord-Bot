const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope!")
   let botmessage = args.join(" ")
   message.delete().catch();
   let say = new Discord.RichEmbed()
        .setTitle("New Informations")
        .setDescription(botmessage)
        .setColor(0xF66704)
    message.channel.sendEmbed(say);

}

module.exports.help = {
    name: "say"
}