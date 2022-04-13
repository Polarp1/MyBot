// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
});

bot.on("message", function (msg) {
	// if message begins with "ping"
	if (msg.content.indexOf("ping") === 0) {
		// send a message to the channel the ping message was sent in.
		bot.sendMessage(msg.channel, "pong!");

		// alert the console
		console.log("pong-ed " + msg.author.username);
	}
});

client.login(process.env.TOKEN);
