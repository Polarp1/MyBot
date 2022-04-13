// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity(' (something is being broadcasted somewhere)', {type: 'WATCHING'});
});

client.on("message", msg => {
    if (msg.content === "congrats") {
        msg.reply("Bzzt bzzt, *a robotic voice begins reading you letters.* https://twitter.com/Unknown_Us3r5?s=20&t=qaM1V1KEHqnyn9gHySNH2A")
    }  
         
})





client.login(process.env.TOKEN);
