const Discord = require('discord.js');
const fs = require('fs');
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
      .setColor("#FFFFFF")
      .setDescription("```"+ args[0] +" : عدد الرسائل التي تم مسحها```");
    message.channel.send({ embed });

    const actionlog = message.guild.channels.find('name', 'log');
 if (!actionlog) return message.channel.send('**لم اجد روم اللوق ومن الممكن ان ليس لدي برمشن لرؤية الشات وشكراً**');
    const embedlog = new Discord.RichEmbed()
      .setDescription('مسح الشات')
      .setColor('#FFFFFF')
      .addField('مسح من قبل', `<@${message.author.id}>`)
      .addField('في شات', message.channel)
      .addField('وقت المسح', message.createdAt);
    actionlog.send(embedlog);
   
  });
};

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
    topRoyale.setColor('#fffff0')
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
  }, 5000); // 5 Secs
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
     .setColor("#ffffff")
     .setDescription(`:white_check_mark: لقد قام شخص ما بسحبك الى رومه الشخصي`)
    var embed = new Discord.RichEmbed() 
    .setTitle(`Done !!.`)
    .setColor("#ffffff") 
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
                .setColor('#ffffff')
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
                .setColor('#ffffff')
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
    if (message.author.id === client.user.id) return;
    if (message.guild) {
    let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
   if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
   message.channel.send("**#bc1 <message>**");
   return;
   }
      message.guild.members.forEach(m => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
        var bc = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('** الـسيرفر**', `${message.guild.name}`,true)
        .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
        .addField(' **الرسالة** ', args)
        .setThumbnail(message.guild.iconURL)
        .setColor('#ffffff')
        m.send(`${m}`,{embed: bc});
      });
      const AziRo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)  
      .setTitle('✔️ | جاري ارسال رسالتك ') 
      .addBlankField(true)
      .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)    
      .addField('📋| الرسالة ', args)
      .setColor('#ffffff') 
      message.channel.sendEmbed(AziRo);     
    }
    } else {
      return;
    }
   });
  client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('#bc2')) {
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
  .setColor('ffffff')
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
client.login(process.env.BOT_TOKEN)
