const Discord = module.require("discord.js")
const fs = require("fs");
var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));


module.exports.run = async (bot, message, args) => {
            var sender = message.author

            if (!userData[sender.id]) userData[sender.id] = {
                messagesSent: 0
            }
        
            userData[sender.id].messagesSent++;
        
            fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
                if (err) console.error(err);
            })

            let current_datetime = new Date()
            let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
            let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setDescription("This is the user info!")
                .setColor(0x2cfc03)
                .addField("Full Username", `${message.author.username}#${message.author.discriminator}`, true)
                .addField("ID", message.author.id, true)
                .addField("Created At", formatted_date, true)
                .addField('Messages Sent', '**' + userData[message.author.id].messagesSent + '**', true)

            message.channel.sendEmbed(embed);
    
            return;
}

module.exports.help = {
    name: "userinfo"
}