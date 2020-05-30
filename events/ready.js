const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Dosyalari Korunuyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Koruma Calisiyor.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Elektirik yükleniyor`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yardım`);
  console.log(`Bot Hazir Sunucuyu Baslatin...`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Charged`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Elektirik Hazır`);
				  
				  
};