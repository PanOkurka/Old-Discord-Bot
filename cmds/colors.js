module.exports.run = async (bot, message, args) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("Nejsou zde žádné barvy!");

    message.channel.send("Našel jsem tyto barvy: \n\n" + colors.array().join("  ") + "\n\n příkaz pro přidání barvy : __**!color [název]**__");
}

module.exports.help = {
    name: "colors"
}