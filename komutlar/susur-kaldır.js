const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("KICK_MEMBERS"))
return message.channel.send(
`:x: Bu Komutu Kullanabilmek için \`kullanıcıları at\` Yetkisine Sahip Olmalısın!`
);
let member = message.mentions.members.first();
let sebep = args.slice(1).join(" ");
if (!member) return message.channel.send(":x: Bir Üye Etiketle!**");
member.removeRole('711179939948265523')
//member.addRole('Verilecek Rol İd') // BAZI KULLANICILAR 1'DEN FAZLA ROL VERMEK İSTİYOR ONLAR BUNLARI DA DOLDURACAK,SİZ EĞER İSTEMİYORSANIZ BU SATIRI TAMAMI İLE SİLEBİLİRİSİNİZ.
//member.addRole('Verilecek Rol İd') // BAZI KULLANICILAR 1'DEN FAZLA ROL VERMEK İSTİYOR ONLAR BUNLARI DA DOLDURACAK,SİZ EĞER İSTEMİYORSANIZ BU SATIRI TAMAMI İLE SİLEBİLİRİSİNİZ.
const embed = new Discord.RichEmbed()


.addField(`Charged Mute Sistemi`,
`\nSusturma açılan kullanıcı: ${member.user} \n \nSusturma açan Yetkili: \`${message.author.username}\` \n \nSebep: ${sebep}`)
client.channels.get('712950526811308033').send(embed)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['k'],
permLevel: 2
};
exports.help = {
name: "s-kaldır",
description: "",
usage: "s-kaldır @uye sebep"
};