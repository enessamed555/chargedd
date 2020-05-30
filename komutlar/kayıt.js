const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_NICKNAMES"))
return message.channel.send(
`:x: Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
);
let member = message.mentions.members.first();
let isim = args.slice(1).join(" ");
let yas = args.slice().join(" ");
if (!member) return message.channel.send(":x: Bir Üye Etiketle!**");
if (!isim) return message.channel.send(":x:**Bir İsim ve Yaş Yaz!**");
member.setNickname(`♦ ${isim}`);
member.removeRole('712886041056378951')
member.addRole('707101362353340436')
//member.addRole('Verilecek Rol İd') // BAZI KULLANICILAR 1'DEN FAZLA ROL VERMEK İSTİYOR ONLAR BUNLARI DA DOLDURACAK,SİZ EĞER İSTEMİYORSANIZ BU SATIRI TAMAMI İLE SİLEBİLİRİSİNİZ.
//member.addRole('Verilecek Rol İd') // BAZI KULLANICILAR 1'DEN FAZLA ROL VERMEK İSTİYOR ONLAR BUNLARI DA DOLDURACAK,SİZ EĞER İSTEMİYORSANIZ BU SATIRI TAMAMI İLE SİLEBİLİRİSİNİZ.
const embed = new Discord.RichEmbed()


.addField(`LinLord'S Kayıt Sistemi`,
`\nKayıt Edilen Kullanıcı: ${member.user} \nKayıt Eden Yetkili: \`${message.author.username}\``)
client.channels.get('712875555988701184').send(embed)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['k'],
permLevel: 0
};
exports.help = {
name: "k",
description: "LinLord'S Kayıt Sistemi",
usage: "k @üye <isim> <yaş>"
};