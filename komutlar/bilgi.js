const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete();
  const emoji = client.emojis.get('699165094898040893');
  
  const yardım = new Discord.RichEmbed()
.setDescription(`
${emoji} **GENEL KOMUTLAR** ${emoji}
[+] !istatistik <- Verilerin Analizini Gösterir.
[+] !kaçkişiyiz <- Sunucuda Online Sayısını Gösterir.
[+] !instagram  <- İnstagramı Paylaşmanızı Sağlar.

${emoji} **TAG KOMUTLARI** ${emoji}
[+] !renk       <- Renkleri Gösterir.
[+] !çekiliş    <- Çekiliş Vakitlerini ve Kazananları Gösterir.
[+] !premium    <- Premium Özelliklerden Haberdar Olabilirsiniz.

${emoji} **Eğlence Komutları** ${emoji}
[+] !öp         <- Öpme Emojisi Gönderir.
[+] !sarıl      <- Sarılma Emojisi Gönderir.
[+] !avatar     <- Avatarınızı Büyütüp Paylaşır.
`,true);
  
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b"],
  permlevel: 4
};

exports.help = {
  name: 'bilgi',
  description: 'Yardım.',
  usage: 'bilgi'
};