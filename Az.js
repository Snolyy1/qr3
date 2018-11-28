const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const moment = require("moment");
const client = new Discord.Client
client.on('ready', () => {
     console.log(`Sx0lyy. BOT STARTED`);
     console.log(`ON ${client.guilds.size} Servers `);
   console.log(`Logged in as ${client.user.tag}!`);
   client.user.setGame(`Simple Server.`,"http://twitch.tv/fuckoff")
  });
var prefix = "#"
client.on('message', message => {
     if(message.content.startsWith(prefix + "مسح")) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ليس لديك برمشن Manage_Messages.**');
  if (!args[0]) return message.channel.send('**ضع عدد لمسح الشات ,**');

  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`**${args[0]} : عدد الرسائل التي تم مسحها**`);
    message.channel.send({ embed });

    const actionlog = message.guild.channels.find('name', 'log');
 if (!actionlog) return message.channel.send('**لم اجد روم اللوق ومن الممكن ان ليس لدي برمشن لرؤية الشات وشكراً**');
    const embedlog = new Discord.RichEmbed()
      .setDescription('مسح الشات')
      .setColor('#000000')
      .addField('مسح من قبل', `<@${message.author.id}>`)
      .addField('في شات', message.channel)
      .addField('وقت المسح', message.createdAt);
    actionlog.send(embedlog);
   
  });
};

});
	client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('#ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
client.on('message', message => {
     var prefix = "#"
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});
let rebel;
   client.on("ready", async  => {
       let guild = client.guilds.get("510036694486220800");
     let users = guild.members.map(member => member.user.id);
     let i;
     rebel=0;
   for (i=0 ; i < users.length ; i++) {
    let   check = guild.members.get(users[i]);
   if(!check.voiceChannelID){
           continue;
   }else{
     rebel++;
   }
   }
   guild.channels.find('id', '517008281781272593').setName(" Voice Online ["+rebel+"]");
     client.setInterval(() =>{
       let d = Date.now()
     }, 5000);
   });
   client.on('voiceStateUpdate', (oldMember, newMember) => {
       let guild = client.guilds.get("510036694486220800");
   let newUserChannel = newMember.voiceChannel
   let oldUserChannel = oldMember.voiceChannel
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
      rebel++;
   guild.channels.find('id', '517008281781272593').setName(" Voice Online ["+rebel+"]");
   } else if(newUserChannel === undefined){
     rebel--;
   guild.channels.find('id', '517008281781272593').setName(" Voice Online ["+rebel+"]");
   }
   });
   client.on('message', Codes => { 
     if(Codes.content === "#voice") {
         Codes.channel.send(" Voice Online ["+rebel+"]");
   }
   });
const tpoints = JSON.parse(fs.readFileSync('./Text.json', 'UTF8'));
const vpoints = JSON.parse(fs.readFileSync('./Voice.json', 'UTF8'));
client.on('ready',async () => {
  console.log(`.Codes TOP.`);
  client.users.forEach(m => {
    if(m.bot) return;
    if(!tpoints[m.id]) tpoints[m.id] = {points: 0, id: m.id};
    fs.writeFileSync("./Text.json", JSON.stringify(tpoints, null, 2));
 
    if(!vpoints[m.id]) vpoints[m.id] = {points: 0, id: m.id};
    fs.writeFileSync("./Voice.json", JSON.stringify(vpoints, null, 2));
  });
});
 
client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let member = message.member;
  let mention = message.mentions.users.first();
  let guild = message.guild;
  let author = message.author;
 
  let rPoints = Math.floor(Math.random() * 2) + 1;// Random Points
  tpoints[author.id].points += rPoints;
  fs.writeFileSync("./Text.json", JSON.stringify(tpoints, null, 2));
  if(args[0] === `#توب`) {
    let _voicePointer = 1;
    let _textPointer = 1;
    let _voiceArray = Object.values(vpoints);
    let _textArray = Object.values(tpoints);
    let _topText = _textArray.slice(0, 5).map(r => `**\`#${_textPointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).sort((a, b) => a > b).join('\n');
    let _voiceText = _voiceArray.slice(0, 5).map(r => `**\`#${_voicePointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).sort((a, b) => a > b).join('\n');
 
    const topRoyale = new Discord.RichEmbed();
    topRoyale.setColor('#000000')
    topRoyale.setAuthor(message.author.username, message.author.avatarURL);
    topRoyale.setTitle('Top Voice & Text.');
    topRoyale.setThumbnail(message.guild.iconURL);
    topRoyale.addField(`**TOP 5 TEXT 💬**`, _topText, true);
    topRoyale.addField(`**TOP 5 VOICE 🎙**`, _voiceText, true);
    message.channel.send(topRoyale).catch(e => {
      if(e) return message.channel.send(`**. Error; \`${e.message}\`**`);
    });
  }
});
 
client.on('voiceStateUpdate', (u, member) => {
  let author = member.user.id;
  let guild = member.guild;
  if(member.voiceChannel === null) return;
  let rPoints = Math.floor(Math.random() * 2) + 1;// Random Points
  setInterval(() => {
    if(!member.voiceChannel) return;
    if(member.selfDeafen) return;
    vpoints[author].points += rPoints;
    fs.writeFileSync("./Voice.json", JSON.stringify(vpoints, null, 2));
  }, 20000); // 5 Secs
});
var prefix = '#'
  client.on('message', message => {
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'اسحب')) {
     if (message.member.hasPermission("MOVE_MEMBERS")) {
     if (message.mentions.users.size === 0) {
     return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "اسحب [USER]``")
    }
    if (message.member.voiceChannel != null) {
     if (message.mentions.members.first().voiceChannel != null) {
         if(message.channel.name != null) {
     var arc = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
     var Ce = message.member.voiceChannel.name; 
    var embed = new Discord.RichEmbed()
     .setTitle("Succes!")
     .setColor("#000000")
     .setDescription(`:white_check_mark: لقد قام شخص ما بسحبك الى رومه الشخصي`)
    var embed = new Discord.RichEmbed() 
    .setTitle(`Done !!.`)
    .setColor("#000000") 
    .setDescription(`✅ <@${usermentioned}> **moved to** `+ Ce +` `)   
    message.guild.members.get(usermentioned).setVoiceChannel(arc).then(m => message.channel.send(embed))
    message.guild.members.get(usermentioned).send(embed)
    } else {
    message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
    }
    } else {
     message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
    }
    } else {
    message.react("❌")
     }}}});

 client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'رول')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
                
                     const e = new Discord.RichEmbed()
                     
                 .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'-'+role1.name+'**')
                .setFooter('Requested By '+message.author.username,message.author.avatarURL)
                .setColor('#000000')
                 message.channel.send(e)
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
                const e = new Discord.RichEmbed()
                
                .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('#000000')
                 message.channel.send(e)
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
  if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** :white_check_mark: Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`** :white_check_mark: Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
    });
}
} else if(args[0] == 'humans') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** :white_check_mark: Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }

    if(role) {
        let role1 = message.guild.roles.find('name', role);

 const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** :white_check_mark: Done...**`);
        });
    }
} else if(args[0] == 'bots') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** :white_check_mark: Done...**`);
    });
  }
    if(role) {
        let role1 = message.guild.roles.find('name', role);
       const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** :white_check_mark: Done...\n**` +role1.name+`** Has Given To __${message.guild.members.size}__ Member**`);
});
}
}
}
});

  client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('#bc1')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let copy = "Simple Server!";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() =>msg.react('✅'))
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
  reaction1.on("collect", r => {
  message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  var bc = new Discord.RichEmbed()
  .setColor('#000000')
  .setTitle('Broadcast')
      .addField("● [من سيرفر]", message.guild.name)
      .addField("● [إلى]", `${m}`)
      .addField("● [الرسالة]", args)
  .setThumbnail(message.author.avatarURL)
  .setFooter(copy, client.user.avatarURL);
  m.send({ embed: bc })
  msg.delete();
  })
  })
  reaction2.on("collect", r => {
  message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
  msg.delete();
  })
  })
  }
  });
  client.on('message', message => {
    var prefix = "#"
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "ban") {
                 if(!message.channel.guild) return message.reply('** This command only for servers**'); 
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.channel.send({
    files: [
      "./met.png"
    ]
  })
    if (!message.guild.member(user)
    .bannable) return message.reply("**I D'ont Have Permission For Ban This User**");
    message.guild.member(user).ban(7, user);
    message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:  `)
  }
  });


var prefix = "#";
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix + 'اسكت')) {
if (!eyad.member.hasPermission("MUTE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` '); 
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("ffffff")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${eyad.author.id}> **`)

          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("ffffff")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${eyad.author.id}> `)

eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix + 'تكلم')) {
if (!eyad.member.hasPermission("MUTE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("ffffff")
.setDescription(`**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}> **`)

          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("ffffff")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`      
<@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${eyad.author.id}>
`)
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
});
  
  client.on('messageDelete', message => {
 
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
  
    var logChannel = message.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[MESSAGE DELETE]**')
    .setColor('#000000')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\`\n\n**Sent By:** <@${message.author.id}> \n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
  
    logChannel.send(messageDelete);
  });
  client.on('messageUpdate', (oldMessage, newMessage) => {
  
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
  
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    if(oldMessage.content.startsWith('https://')) return;
  
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[تعديل رسالة]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('#000000')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` \n\n**Sent By:** <@${oldMessage.author.id}>\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
  
    logChannel.send(messageUpdate);
  });
  
  
  client.on('roleCreate', role => {
  
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[صناعة رتبه]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\`\n**By:** <@${userID}>`)
        .setColor('#000000')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
  
        logChannel.send(roleCreate);
    })
  });
  client.on('roleDelete', role => {
  
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[حذف رتبه]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}>`)
        .setColor('#000000')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
  
        logChannel.send(roleDelete);
    })
  });
  
  
  client.on('channelCreate', channel => {
  
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
  
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**[صناعة روم]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`)
        .setColor('#000000')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
  
        logChannel.send(channelCreate);
    })
  });
  client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
  
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[حذف روم]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`)
        .setColor('#000000')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
  
        logChannel.send(channelDelete);
    })
  });
  
  client.on('guildBanAdd', (guild, user) => {
  
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        if(userID === client.user.id) return;
  
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[حظر عضو]**')
        .setThumbnail(userAvatar)
        .setColor('#000000')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> \n**By:** <@${userID}> `)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
  
        logChannel.send(banInfo);
    })
  });
  client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        if(userID === client.user.id) return;
  
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[فك الحظر عن عضو]**')
        .setThumbnail(userAvatar)
        .setColor('#000000')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> `)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
  
        logChannel.send(unBanInfo);
    })
  });
  client.on('guildUpdate', (oldGuild, newGuild) => {
  
    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = oldGuild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**[تغير اسم السيرفر]**')
            .setThumbnail(userAvatar)
            .setColor('#000000')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> `)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
  
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**[تغير منطقة السيرفر]**')
            .setThumbnail(userAvatar)
            .setColor('#000000')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}>`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
  
            logChannel.send(guildRegion);
        }
        if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
            if(oldGuild.verificationLevel === 0) {
                var oldVerLvl = 'Very Easy';
            }else
            if(oldGuild.verificationLevel === 1) {
                var oldVerLvl = 'Easy';
            }else
            if(oldGuild.verificationLevel === 2) {
                var oldVerLvl = 'Medium';
            }else
            if(oldGuild.verificationLevel === 3) {
                var oldVerLvl = 'Hard';
            }else
            if(oldGuild.verificationLevel === 4) {
                var oldVerLvl = 'Very Hard';
            }
  
            if(newGuild.verificationLevel === 0) {
                var newVerLvl = 'Very Easy';
            }else
            if(newGuild.verificationLevel === 1) {
                var newVerLvl = 'Easy';
            }else
            if(newGuild.verificationLevel === 2) {
                var newVerLvl = 'Medium';
            }else
            if(newGuild.verificationLevel === 3) {
                var newVerLvl = 'Hard';
            }else
            if(newGuild.verificationLevel === 4) {
                var newVerLvl = 'Very Hard';
            }
  
            let verLog = new Discord.RichEmbed()
            .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
            .setThumbnail(userAvatar)
            .setColor('#000000')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild Verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> `)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
  
            logChannel.send(verLog);
        }
    })
  });
  client.on('guildMemberUpdate', (oldMember, newMember) => {
    if(!oldMember.guild) return;
  
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
  
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '`اسمه الاصلي`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '`اسمه الاصلي`';
            }else {
                var newNM = newMember.nickname;
            }
  
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[تغير نك نيم]**')
            .setThumbnail(userAvatar)
            .setColor('#000000')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} \n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> `)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
  
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
  
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[إضافة رتبه لعضو]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('#000000')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}>\n**Role:** \`\`${role.name}\`\` \n**By:** <@${userID}> `)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
  
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
  
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[إزالة رتبه من عضو]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('#000000')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> \n**Role:** \`\`${role.name}\`\` \n**By:** <@${userID}> `)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
  
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.id !== newMember.guild.owner.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('#000000')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> \n**New Owner:** <@${newMember.user.id}>`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
  
        logChannel.send(newOwner);
    }
  });
  
  
  client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
  
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
  
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[إضافة ميوت صوتي]**')
            .setColor('#000000')
            .setDescription(`**User:** ${voiceOld} \n**By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` `)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
  
            logChannel.send(serverMutev);
        }
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[إزالة ميوت صوتي]**')
            .setColor('#000000')
            .setDescription(`**User:** ${voiceOld} \n**By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
  
            logChannel.send(serverUnmutev);
        }
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[إضافة سماعة لعضو]**')
            .setColor('#000000')
            .setDescription(`**User:** ${voiceOld} \n**By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
  
            logChannel.send(serverDeafv);
        }
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**[إزالة سماعة من عضو]**')
            .setColor('#000000')
            .setDescription(`**User:** ${voiceOld} **By:** <@${userID}> \n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
  
            logChannel.send(serverUndeafv);
        }
      })
    });
  
  var {Client , RichEmbed} = require('discord.js');
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
   
  client.on('guildMemberRemove', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == "MEMBER_KICK") {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {   
              time : 1
            };
        } else {   
            data[ss.executor.id].time+=1
        };   
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []   
                  });
                  data[ss.executor.id].time = 0
              });   
          setTimeout(function(){
              if (data[ss.executor.id].time <= 5) {   
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  });
  client.on('roleDelete', (u) => {   
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == "ROLE_DELETE") {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
        } else {
            data[ss.executor.id].time+=1
        };
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });   
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 5) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  });
  client.on('channelDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {   
          var ss = s.entries.first();
          if (ss.action == "CHANNEL_DELETE") {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
        } else {
            data[ss.executor.id].time+=1   
        };
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 5) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  });
  client.on('guildBanAdd', (g , u) => {
      g.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `MEMBER_BAN_ADD`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
        } else {
            data[ss.executor.id].time+=1
        };
          if (data[ss.executor.id].time >= 5) {
              g.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({   
                      permissions : []
                  });    
              });   
          }
          setTimeout(function(){
              if (data[ss.executor.id].time <= 5) {    
                  data[ss.executor.id].time = 0
              }   
          },60000)
      };   
      });        
      fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{      
          if (err) console.log(err.message);     
      });       
  });  
  var prefix = "#";
  client.on('message', message => {
   if(message.content.startsWith(prefix + "روابطي")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
.setColor("#000000")
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
  
const SnO = new Set();
    client.on('message', async msg => {
  if(msg.content.startsWith("رابط")) {
  if (SnO.has(msg.author.id)) {
    let q21 = new Discord.RichEmbed()
    .setDescription(`**يجب عليك الانتظار 24 ساعه!**`)
    .setColor(`#000000`)
    return msg.channel.send(q21).then(message => {
     message.delete(10000) 
    })
    }
    SnO.add(msg.author.id);

   msg.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 4800,
  }).then(invite =>
  msg.author.sendMessage(`**
هذا الرابط لعضو واحد فقط ,
ولمدة ساعة فقط ,**
${invite.url} .
`)
  )
    msg.channel.send(`**:link: Check Your DM **`)
  }
    setTimeout(() => {
    },86400000);
    });
client.on('message',message =>{
    var prefix = "#";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = []; 
  i.forEach(inv =>{
    var [invs,i]=[{},null]; 
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`**invite:** ${inv.url} **inviter:** ${inv.inviter} \`${invs[inv.code]}\`;`);
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
           message.channel.send({ embed: embed });
  });
    }
});
client.login(process.env.BOT_TOKEN)
