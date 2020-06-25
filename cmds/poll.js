const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Ne ne! Nemůžeš!`);

    if(!args[1]){
        message.channel.send("**[Poll] Chybí obsah!!**").then(message.delete(100).catch(console.error))
        return;
    };

    let msgArgs = args.slice(0).join(" ");

    const pollEmbed = new Discord.RichEmbed()
    .setTitle("📋 " + msgArgs)
    .setDescription("\nAno ->👍\n󠀀󠀀Ne -> 👎")
    .setColor(0x09ff00)
    .setAuthor("Mod " + message.author.username + " se ptá:");

    message.channel.send(pollEmbed).then(messageReaction => {
        messageReaction.react("👍");
        messageReaction.react("👎");
        message.delete(1000).catch(console.error)
    });

}

module.exports.help  = {
    name: "poll"
};