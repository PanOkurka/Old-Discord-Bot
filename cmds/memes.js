const snek = module.require("snekfetch")
const api = "https://meme-api.herokuapp.com/gimme"

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Vytváření obrázku...")

    let file = (await snek.get(api)).body.url;
    if(!file) return message.channel.send("Rozbil jsem se! Zkus to znovu.")
    
    await message.channel.send({files: [
        {
            attachment: file,
            name: file.split("/").pop()
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name: "meme"
}