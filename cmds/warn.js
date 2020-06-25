const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"))

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Ne ne! Nemůžeš!`);
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply("Nemohu ho najít!");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply(`To nejde kámo!`);
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#00FF0F")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Number of Warning", warns[wUser.id].warns)
    .addField("Reason", reason)

    let warnchannel = message.guild.channels.find(`name`, "punish-log");
    if(!warnchannel) return message.reply("Nejde najít warn channel")

    message.channel.send(`<@${wUser.id}> ` + "dostal warn za " + reason)
    warnchannel.send(warnEmbed).then(message.delete(3000).catch(console.error));
    return;
}

module.exports.help  = {
    name: "warn"
}