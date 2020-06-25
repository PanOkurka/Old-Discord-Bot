const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Nikoho tu nevidím!")
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send("Nope!");
    if(kUser.hasPermissions("MANAGE_MESSAGES")) return message.reply("To nejde kámo!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor(0xFF2E2E)
    .addField("Kick User", `${kUser}`)
    .addField("Kick by", `${message.author}`)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "punish-log")
    if(!kickChannel) return message.channel.send("Není zde punish log!")

    message.guild.member(kUser).kick(kReason)
    kickChannel.send(kickEmbed).then(message.delete(1000).catch(console.error))

}

module.exports.help = {
    name: "kick"
}