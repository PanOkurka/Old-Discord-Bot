const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	const { getStatus } = require("mc-server-status")
 
	const status = await getStatus("play.survival-games.cz")
	console.log(status)

	message.channel.sendEmbed(status)
	return;
}

module.exports.help = {
    name: "A-Craft"
}