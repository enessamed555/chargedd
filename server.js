const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require("jimp");
const db = require("quick.db");
require('./util/eventLoader')(client);
 

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm selam**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
    msg.reply('**Argo Kelime Kullanma**');
  }  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktirgit') {
    msg.reply('**Argo Kelime Kullanma**');
  }
if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'bye bye') {
   	msg.reply('su gibi git su gibi gel');
  }

  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }

  if (msg.content === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :)');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler');
  }

  if (msg.content === 'merhaba') {
   	msg.reply('sanada merhaba');
  }

  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

                                                       //otorol
client.on("guildMemberAdd", async(member) => {
  try {
    let embed= new Discord.RichEmbed()
    await(member.addRole("712886041056378951"))
    await client.channels.get("712875555988701184").send(`**Sunucumuza Hoşgeldin** **${member}**\n**Kayıt İçin Buraya İsmini Ve Yaşını Yaz Bekle.**\n**Hesap: **${new Date().getTime() - member.user.createdAt.getTime() < 45*24*60*60*1000 ? " ``Tehlikeli``!" : "``Güvenli``!"} \n@Kayıt Ekibi **yetkisine sahip arkadaşlar ilgilenecekler.**`,)
    if(!member.roles.has("712886041056378951")) {
      member.addRole("712886041056378951")

    }

  } catch(err) { console.log(err) }

})

                                                   //özelden mesaj
client.on(`guildMemberAdd`, async member => {
  const e = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setImage(`https://cdn.discordapp.com/attachments/689009368078876742/697710176597180486/Linlordsunucugifi.gif`)
    .addField(`***Sunucumuza Geldiğin İçin Teşekkürler.!***`, `LinLord'S İyi Eğlenceler diler`)
    .setFooter(`youtube.com/LinLord'S`)
  member.send(e);
});

                           
client.login(ayarlar.token);
