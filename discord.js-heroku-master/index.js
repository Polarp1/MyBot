// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
});

bot.on("message") {
	message.channel.send (`${client.ws.ping} ms`)
	}
});

client.login(process.env.TOKEN);
