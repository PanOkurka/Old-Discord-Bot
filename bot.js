const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const fs = require("fs");
var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
const xp = require("./xp.json")

const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`bot is ready! ${bot.user.username}`);

    bot.user.setStatus("online")

    bot.user.setGame("!help")
});

bot.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);


    var sender = message.author

    if (!userData[sender.id]) userData[sender.id] = {
        messagesSent: 0
    }

    userData[sender.id].messagesSent++;

    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    })
    
});

bot.on("guildMemberAdd", async member => {

    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    welcomechannel.send(`${member} just joined the server!`);
    return;
});

bot.on("guildMemberRemove", async member => {

    let leavechannel = member.guild.channels.find(`name`, "exit");
    leavechannel.send(`${member.displayName} leave the server!`);
    return;
});

bot.on("channelCreate", async channel => {

    let sChannel = channel.guild.channels.find(`name`, "logs");
    let chcreate = new Discord.RichEmbed()
    .setTitle("Channel Created!")
    .setDescription(`${channel} byl vytvořen!`)
    .setColor(0x49F759)
    sChannel.send(chcreate)
    return;
})

bot.on("channelDelete", async channel => {

    let sChannel = channel.guild.channels.find(`name`, "logs");
    let chdel = new Discord.RichEmbed()
    .setTitle("Channel Remove!")
    .setDescription(`${channel.name} byl odstraněn!`)
    .setColor(0x49F759)
    sChannel.send(chdel)
    return;
})

bot.on("messageDelete", async message => {
    
    if(message.author.bot) return;

    let logs = await message.guild.fetchAuditLogs({type: 72});
    let entry = logs.entries.first()

    let embed = new Discord.RichEmbed()
        .setTitle("Deteted Message")
        .setAuthor(message.author.tag)
        .setDescription(`**Autor:** ${message.author.tag}\n**Channel:** ${message.channel}\n**Message:** ${message.content}\n**Executor:** ${entry.executor}`)
        .setTimestamp();
    let delchannel = message.guild.channels.find(x => x.name === 'logs')
    delchannel.send(embed);

});


bot.on("messageUpdate", async(oldMessage, newMessage) => {

    if(oldMessage.content === newMessage.content){
        return;
    }

        let logembed = new Discord.RichEmbed()
        .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
        .setThumbnail(oldMessage.author.avatarURL)
        .setColor(0xF66704)
        .setDescription("Message was edited!")
        .addField("Before", oldMessage.content, true)
        .addField("After", newMessage.content, true)
        .setTimestamp();

        let logchannel = newMessage.guild.channels.find(ch => ch.name === "logs")
        if(!logchannel) return;
        logchannel.send(logembed);

})


bot.on('message', function(message) {
 
    if(message.content.toLowerCase() === `<@611476452994711555> jsi tu?`)
        message.reply('Ano jsem tu.').catch(err => console.log(err));

});

bot.on('message', function(message) {
 
    if(message.content.toLowerCase() === 'je tu okurka?')
        message.reply('Neotravuj ho, Něco určitě dělá.').catch(err => console.log(err));

});

bot.on('message', function(message) {
 
    if(message.content.toLowerCase() === 'budeme kamarádi okurko?')
        message.reply('Ne. Nemá na to čas...').catch(err => console.log(err));

});

bot.on('message', msg => {

    if(msg.member.hasPermissions("MANAGE_MESSAGES")) return;

    let wordArray = msg.content.toLowerCase().split(" ")

    let filterWords = ['https', 'http', 'k i c k', 'kick.', 'kick?', 'kick!', 'b a n', 'ban?', 'ban.', 'ban!', 'hajzle', 'kkti', 'kkt', 'kokot', 'kokote', 'bliat', 'šukat', 'cyka', 'suka', 'ban', 'kick', 'more', 'pica', 'pico', 'píča', 'píčo', 'píčá', 'pice', 'kurva', 'píče', 'píčé', 'fuck']

    for(var i = 0; i < filterWords.length; i++){
        if(wordArray.includes(filterWords[i])) {
            msg.delete()
        }
    }

})

bot.login(botSettings.token);