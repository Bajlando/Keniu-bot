const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const prefix = "r.";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (message.content.startsWith(" ")) {
    if (message.author.bot) return;
      if(!message.channel.guild) return message.reply('ta');
    let say = new Discord.RichEmbed()
  .setTitle("Od " + message.author.username)
  .setThumbnail(message.author.avatarURL)
  .setAuthor("PROPOZYCJA")
    .setDescription(args.join("  "))
    .setColor(12248579)
      .setFooter(" ")
    message.guild.channels.find('name','propozycje').send(say).then(embedMessage => {
        embedMessage.react("👍");
        embedMessage.react("👎");
    });
    message.author.send("**- Dziękujemy za oddanie propozycji** :heart:");

    message.delete();
  }


});

client.login(process.env.BOT_TOKEN);
