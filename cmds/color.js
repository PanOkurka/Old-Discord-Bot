module.exports.run = async (bot, message, args) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("Nejsou zde žádné barvy!");

    let str = args.join(" ");
    let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());

    if(!role) return message.channel.send("Tuto barvu jsem nenašel!");
    
    try {
        await message.member.removeRoles(colors);
        await message.member.addRole(role);
        message.channel.send(`Nyní máš ${role} barvu!`)
    } catch(e){
        message.channel.send(`Error: ${e.message}`);
    }
}

module.exports.help = {
    name: "color"
}