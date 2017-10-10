const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

var roll = function() {
    var result = String(Math.floor(Math.random() * 21))
    return result
}

//Turn the discordjs on to listen to a message
    client.on('message', (message) => {

//Listens to each instance of the message /knock and executes the code below
        if (message.content.includes('/roll')) {
            const msg = message.content.split(' ');

//Function knock() returns the formatted joke
                message.reply(roll());

        }
    });

    const token = process.env.TOKEN;
    client.login(token);
