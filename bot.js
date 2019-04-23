const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const prefix = "k.";

client.on("ready", () => {
    client.user.setStatus("dnd");
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
