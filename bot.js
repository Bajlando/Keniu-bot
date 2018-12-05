const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

const serverStats = {
    guildID: '303657307231879169',
    totalUsersID: '499164441506480129',
    memberCountID: '499164461459046410',
    botCount: '499164691730268170',
    clock: '519997047559159818',
    time: '501863189458452480',
    newUser: '499164704313442314'
}

client.on('ready', () => {
    console.log('I am ready!');
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
