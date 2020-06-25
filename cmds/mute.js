const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Sry bro. Nenašel jsem!");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("To nejde kámo!");
    let muterole = message.guild.roles.find(`name`, "muted");

    let mutetime = args[1];
    if(!mutetime) return message.reply("Chybí ti čas bro!")
    
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> byl umlčen na dobu ${ms(ms(mutetime))}!`).then(message.delete(1000).catch(console.error));

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> byl odmlčen!`);
    }, ms(mutetime));

};

module.exports.help = {
    name: "mute"
}