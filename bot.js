const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

var members;

var done = [];
var queue = [];

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function ranBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function send(user) {
  console.log("Sent To "+user.tag);
  user.sendMessage("Hej! Wbij do nas https://discord.gg/bBVWbNd");
}

setInterval(function () {
  while(true) {
    if(queue != []) {
      if(done.indexOf(queue[0].tag) == -1) {
        done.push(queue[0].tag);
        try {
          send(queue[0]);
        } catch(e) {
          continue;
        }
        queue.shift();
        break;
      } else {
        queue.shift();
        continue;
      }
    }
  }
}, ranBetween(60000, 120000));

client.on("ready", function () { // when bot connects
  console.log("Bot Ready"); // display ready
});

client.on("message", function (message) { // when recieved message, from server or PMs
  var channel = message.channel; // define channel
  var author = message.author; // define author

  if(author.tag != "Vault Bot#4759") { // check whether message is not sent by itself
    if(channel.type == "text") { // check that the message is from a text channel inside the server
      queue.push(author);
    }
  }

});

client.on("guildMemberAdd", function (member) { // when recieved message, from server or PMs\

  queue.push(member.user);

});

client.on("guildMemberRemove", function (member) { // when recieved message, from server or PMs\

  queue.push(member.user);

});

client.on("presenceUpdate", function (oldm, newm) {
  queue.push(newm.user);
})

client.on("ready", () => {
    client.user.setGame(`k.help | Na ${client.guilds.size} serwerach <3`, "https://www.twitch.tv/vami12");
});

client.on("ready", () => {
    client.user.setStatus("dnd");
});

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('515876986992984066').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },2000);
  });

const serverStats = {
    guildID: '303657307231879169',
    totalUsersID: '499164441506480129',
    memberCountID: '499164461459046410',
    botCount: '499164691730268170',
    clock: '520000306629574656',
    time: '501863189458452480',
    newUser: '499164704313442314'
}

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 90;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === '✋-powitalnia-✋');
	if (!channel) return;

	const canvas = Canvas.createCanvas(786, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '40px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Witaj na serwerze,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.7);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`**${member}** **Właśnie dołączył na serwer! Zerknij do regulaminu i baw się dobrze**`, attachment);
});

client.on('ready', () => {
    let autopisanko = "10s";
    setInterval(function() {
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`#`);
    client.channels.get(serverStats.clock).setName(`#`);
    client.channels.get(serverStats.clock).setName(`#T`);
    client.channels.get(serverStats.clock).setName(`#T`);
    client.channels.get(serverStats.clock).setName(`#TE`);
    client.channels.get(serverStats.clock).setName(`#TE`);
    client.channels.get(serverStats.clock).setName(`#TEA`);
    client.channels.get(serverStats.clock).setName(`#TEA`);
    client.channels.get(serverStats.clock).setName(`#TEAM`);
    client.channels.get(serverStats.clock).setName(`#TEAM`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM KE`);
    client.channels.get(serverStats.clock).setName(`#TEAM KE`);
    client.channels.get(serverStats.clock).setName(`#TEAM KEN`);
    client.channels.get(serverStats.clock).setName(`#TEAM KEN`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENI`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENI`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
}, 600);
 });

client.login(process.env.BOT_TOKEN);
