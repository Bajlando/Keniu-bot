const        Discord = require('discord.js');
const         client = new Discord.Client({fetchAllMembers: true});
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const prefix = ".";

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('500759364181950464').roles.find('name', 'DISCO').edit({color: 'RANDOM'})
    },3500);
  });

client.on("ready", () => {
    client.user.setStatus("dnd");
});

client.login(process.env.BOT_TOKEN);
