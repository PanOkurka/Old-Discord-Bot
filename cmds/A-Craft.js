module.exports.run = async (bot, message, args) => {
    $.getJSON('https://api.mcsrvstat.us/2/play.advanced-craft.cf', function(status) {
	    //Show the version
	    console.log(status.version);

	    //Show a list of players
	    $.each(status.players.list, function(index, player){
		    console.log(player);
	    });
    });
}

module.exports.help = {
    name: "A-Craft"
}