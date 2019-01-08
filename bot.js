const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const prefix = "k.";

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
  user.sendMessage(":fire: **Hej! Wbij i zobacz jakie to są świetne serwery** :fire: https://discord.gg/bBVWbNd https://discord.gg/XSkBVBa -- Jeśli chcesz aby twoja reklama pojawiła się tutaj, dodaj bota na swój serwer https://discordapp.com/oauth2/authorize?client_id=519988098789277696&scope=bot&permissions=8");
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

client.on("guildMemberAdd", member => {
    member.user.sendMessage(`:fire: **Hej! Wbij i zobacz jakie to są świetne serwery** :fire: https://discord.gg/bBVWbNd https://discord.gg/XSkBVBa -- Jeśli chcesz aby twoja reklama pojawiła się tutaj, dodaj bota na swój serwer https://discordapp.com/oauth2/authorize?client_id=519988098789277696&scope=bot&permissions=8`);
});

client.on("ready", () => {
    client.user.setStatus("dnd");
});

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('515876986992984066').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },2000);
  });

client.on('message', async message => {

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

if (command == "help") {

  let help = new Discord.RichEmbed()
  .setAuthor("Keniu Bot", "https://cdn.discordapp.com/avatars/519988098789277696/4d0e77ded3750f51ba218af0592dfed4.png?size=2048")
  .setColor('#9900cc')
  .setTitle("Pomocne komendy, prefix k.")
  .addField("**Design **", "`disco`, `animacja`")
  .addField("**Moderacyjne**", "`warn`, `mute`, `ban`, `kick`, `clear`")
  .addField("**4 fun**", "`cat`, `dog`, `random`, `rip`, `hug`, `kiss`, `punch`, `slap`, `papieros`, `ziemniak`, `kill`, `sex`, `8ball`, `flip`, `say`, `hacked`")
  .addField("**Pozostałe**", "`botinfo`, `ping`, `report`, `serverinfo`, `userinfo`, `avatar`")

  message.channel.send(help);

}});

client.on('message', async message => {

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

if (command == "disco") {

  let disco = new Discord.RichEmbed()
  .setTitle("**Disco Rola**")
  .setColor(12248579)
  .addField("(Zapamiętaj że ranga Keniu Bot musi być wyżej niż rola Disco)", "Aby ustawić Rolę disco wpisz k.discoustaw")
	.setThumbnail("https://cdn.discordapp.com/attachments/497774400515342336/531918274619899935/unknown.png")
	.setImage("https://cdn.discordapp.com/attachments/497774400515342336/531917417581117451/ezgif-2-8430ce96d061.gif")

  message.channel.send(disco);

}});

client.on('message', async msg => {
    if (msg.content.toLowerCase() === prefix + "discoustaw") {
   if (msg.channel.type === "dm") return;
	 let discorola = msg.guild.roles.find(`name`, "Disco");
   if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply(":potato: **Nie masz uprawnień do stworzenia disco roli :)** :potato:");
   if(!discorola){
     try{
       discorola = await msg.guild.createRole({
         name: "Disco",
         color: "#000000",
         permissions:[]
       })
       msg.guild.channels.forEach(async (channel, id) => {
         await channel.overwritePermissions(discorola, {
           SEND_MESSAGES: true,
           ADD_REACTIONS: true
         });
       });
     }catch(e){
       console.log(e.stack);
     }
   }
   msg.channel.send("**Ranga Disco pomyślnie ustawiona**");
  setInterval(() => {
      msg.guild.roles.find('name', 'Disco').edit({color: 'RANDOM'})
    }, 3500);
  }
});

client.on('guildCreate', (guild) => {
  let channel = client.channels.get('531548739504963586')
  const embed = new Discord.RichEmbed()
    .setTitle('Dodano bota')
    .setColor('#00ff0c')
    .addField('Nazwa serwera:', `${guild.name}`)
    .addField('Id serwera:', `${guild.id}`)
    .addField('Właściciel serwera:', `${guild.owner.user.username}#${guild.owner.user.discriminator} (${guild.owner.user.id})`)
    .addField('Ludzi', `${guild.memberCount}`)
  client.channels.get(channel.id).sendEmbed(embed)
});

client.on('guildDelete', (guild) => {
  let channel = client.channels.get('497774400515342336')
  const embed = new Discord.RichEmbed()
    .setTitle('Usunięto bota')
    .setColor('#ff0000')
    .addField('Nazwa serwera:', `${guild.name}`)
    .addField('Id serwera:', `${guild.id}`)
    .addField('Właściciel serwera:', `${guild.owner.user.username}#${guild.owner.user.discriminator} (${guild.owner.user.id})`)
    .addField('Ludzi', `${guild.memberCount}`)
  client.channels.get(channel.id).sendEmbed(embed)
});

client.login(process.env.BOT_TOKEN);
