const Discord = module.require("discord.js")


module.exports.run = async (bot, message, args) => {
        let current_datetime = new Date()
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
        let serverstats = new Discord.RichEmbed()
            .setTitle("__**Server Info**__")
            .setDescription("**This is the server info!**")
            .setColor(0xF66704)
            .addField("Server Name", message.guild.name, true)
            .addField("Onwer", message.guild.owner, true)
            .addField("Region", message.guild.region, true)
            .addField("Members", message.guild.memberCount, true)
            .addField("Afk Channel", message.guild.afkChannel, true)
            .addField("Afk timeout", message.guild.afkTimeout, true)
            .addField("Server id", message.guild.id, true)
            .addField("Verification Level", message.guild.verificationLevel, true)
            .addField("Created At", formatted_date, true)

        message.channel.sendEmbed(serverstats);

        return;
}

module.exports.help = {
    name: "serverinfo"
}