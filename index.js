const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});
//Read in text to display
var fs = require("fs");
var text = fs.readFileSync("./mytext.txt", "utf-8");
var textByLine = text.split("\n")

var roll = function() {
    var result = String(Math.floor(Math.random() * 21))
    console.log(result);
    return result
}

//Turn the discordjs on to listen to a message
    client.on('message', (message) => {

//Listens to each instance of the message /roll and executes the code below
        if (message.content.includes('/roll')) {
            const msg = message.content.split(' ');

                message.reply(roll());

        }
        else if (message.content.substr(0,1)==('/')) {
          var num = message.content.substr(1);
          num = parseInt(num);
          if (!isNaN(num)){
          console.log(num);
          message.reply(textByLine[num]);
          }
        }
    });

    const token = process.env.TOKEN;
    client.login(token);
