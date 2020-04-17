const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const fs = require("fs");
var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
const xp = require("./xp.json")
const { createCanvas, loadImage } = require("canvas");


const bot = new Discord.Client({disableEveryone: true});
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

    bot.user.setGame("/help")
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

    //if(command === `${prefix}userinfo`) {
    //    let embed = new Discord.RichEmbed()
    //        .setAuthor(message.author.username)
    //        .setDescription("This is the user info!")
    //        .setColor(0x2cfc03)
    //        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    //        .addField("ID", message.author.id)
    //        .addField("Created At", message.author.createdAt);

    //    message.channel.sendEmbed(embed);

    //    return;
    //}

    
});

bot.login(botSettings.token);