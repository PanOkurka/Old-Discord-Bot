module.exports.run = async (bot, message, args) => {

    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("No color roles here!")

    //message.channel.send(colors.array().join(" "))

    let str = args.join(" ");
    let role = colors.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase())

    if(!role) return message.channel.send("Role don't exist!")

    try{
        await message.member.removeRoles(colors);
        await message.member.addRole(role);
        message.channel.send("Role added!")
    } catch(e) {
        message.channel.send("Operation failed!")
    }

}


module.exports.help = {
    name: "color"
}