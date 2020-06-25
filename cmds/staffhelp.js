const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let help = new Discord.RichEmbed()
        .setTitle("__Staff__ __Commands__")
        .addField("!ban", "ban {name} {reason}", true)
        .addField("!kick", "kick {name} {reason}", true)
        .addField("!mute", "mute {name} {time}", true)
        .addField("!poll", "poll {text}", true)
        .addField("!say", "say {text}", true)
        .addField("!warn", "warn {name} {reason}", true)
        .setColor(0xF66704)
    message.channel.sendEmbed(help);
    return;
}

module.exports.help = {
    name: "staffhelp"
}