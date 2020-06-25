const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Nikoho tu nevidím!")
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermissions("MANAGE_ROLES")) return message.channel.send("Nope!");
    if(bUser.hasPermissions("MANAGE_MESSAGES")) return message.reply("To nejde kámo!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor(0xFF2E2E)
    .addField("Ban User", `${bUser}`)
    .addField("Banned by", `${message.author}`)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "punish-log")
    if(!banChannel) return message.channel.send("Není zde punish log!")

    message.guild.member(bUser).ban(bReason)
    banChannel.send(banEmbed).then(message.delete(1000).catch(console.error))

}

module.exports.help = {
    name: "ban"
}