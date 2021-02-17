const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


function losuj(){
    var _list = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tmp = '', i = 0;
    var list_len = _list.length;
	var ilo = Math.floor(Math.random() * 11) + 9;

        for (i=0;i<ilo;i++) {
            tmp += _list.charAt(Math.floor(Math.random()*list_len));
        }
    
    return tmp;
    }

let result = Math.random().toString(36).substring(2,7);

client.on('message', async message => {
  if (message.content === (`${prefix}gen`)) 
  setInterval(() => {
      message.channel.send(`discord.gift/`+losuj())
  }, 2000);
});

client.login(token);
