const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on("ready", () => {
    client.user.setActivity(`jak zarabiacie PSC, GP i zyskujecie Discord Nitro`, { type: "WATCHING"} )
});

function losuj(){
    var _list = "abcdefghijklmnopqrstuvwxyz-1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tmp = '', i = 0;
    var list_len = _list.length;
	var ilo = 16;

        for (i=0;i<ilo;i++) {
            tmp += _list.charAt(Math.floor(Math.random()*list_len));
        }
    
    return tmp;
    }

function gp(){
    var _list1 = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tmp1 = '', i = 0;
    var list_len1 = _list1.length;
	var ilo1 = 4;

        for (i=0;i<ilo1;i++) {
            tmp1 += _list1.charAt(Math.floor(Math.random()*list_len1));
        }
    
    return tmp1;
    }

function psc(){
    let xa = Math.floor(Math.random() * 10);
    return xa;
}

let result = Math.random().toString(36).substring(2,7);

client.on('message', async message => {
    
    if (message.content === (`${prefix}gp`)) {
    //--------mini-------------------------------------------------
    if (message.channel.id === '818213454061109308') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a mini generatora gp`);
    }
    //--------normal-------------------------------------------------
    else if (message.channel.id === '818214002071961641') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a normal generatora gp`);
    }
    //--------super-------------------------------------------------
    else if (message.channel.id === '818214076656123915') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a super generatora gp`);
    }
    //--------mega-------------------------------------------------
    else if (message.channel.id === '818214188245581834') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a mega generatora gp`);
    }
    //--------ultra-------------------------------------------------
    else if (message.channel.id === '818214545230266420') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a ultra generatora gp`);
    }
    //--------booster-------------------------------------------------
    else if (message.channel.id === '818216005570002974') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.author.send(` :small_blue_diamond: ${gp()} ${gp()} ${gp()} ${gp()}:small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a booster generatora psc`);
    }
}


    //psc


if (message.content === (`${prefix}psc`)) {
    //--------mini-------------------------------------------------
    if (message.channel.id === '818213454061109308') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a mini generatora psc`);
    }
    //--------normal-------------------------------------------------
    else if (message.channel.id === '818214002071961641') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a normal generatora psc`);
    }
    //--------super-------------------------------------------------
    else if (message.channel.id === '818214076656123915') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a super generatora psc`);
    }
    //--------mega-------------------------------------------------
    else if (message.channel.id === '818214188245581834') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a mega generatora psc`);
    }
    //--------ultra-------------------------------------------------
    else if (message.channel.id === '818214545230266420') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a ultra generatora psc`);
    }
    //--------booster-------------------------------------------------
    else if (message.channel.id === '818216005570002974') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.author.send(`:small_orange_diamond: 0${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} ${psc()}${psc()}${psc()}${psc()} :small_blue_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a booster generatora psc`);
    }
}

    
    //nitro


  if (message.content === (`${prefix}nitro`)) {
    if (message.channel.id === '818438312980250645') {
    message.author.send(`discord.gift/`+losuj());
    }
    //--------mini-------------------------------------------------
    else if (message.channel.id === '818213454061109308') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a mini generatora nitro`);
    }
    //--------normal-------------------------------------------------
    else if (message.channel.id === '818214002071961641') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a normal generatora nitro`);
    }
    //--------super-------------------------------------------------
    else if (message.channel.id === '818214076656123915') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a super generatora nitro`);
    }
    //----------mega----------------------------------------------
    else if (message.channel.id === '818214188245581834') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a mega generatora nitro`);
    }
    //----------ultra----------------------------------------------
    else if (message.channel.id === '818214545230266420') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a ultra generatora nitro`);
    }
    //----------booster------------------------------------------
    else if (message.channel.id === '818216005570002974') {
        message.author.send(`O to twoje wygenerowane kody:`);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.author.send(`:small_blue_diamond: discord.gift/${losuj()} :small_orange_diamond: `);
        message.author.send(`:small_orange_diamond: discord.gift/${losuj()} :small_blue_diamond: `);
        message.reply(`sprawdź PV!`);
        const kanał = client.channels.cache.find(channel => channel.id === "818234614983950371");
        kanał.send(`<@${message.author.id}> użył/a booster generatora nitro`);
    }
  }
  
});

client.login(process.env.TOKEN_BOT);

