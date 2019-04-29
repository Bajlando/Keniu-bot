const        Discord = require('discord.js');
const         client = new Discord.Client({fetchAllMembers: true});
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const prefix = ".";

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('348639545530515466').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },3500);
  });

client.on("ready", () => {
    client.user.setStatus("dnd");
});

client.login(process.env.BOT_TOKEN);
