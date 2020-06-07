const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const cheerio = require('cheerio');
const request = require('request');
const Canvas = require("canvas");
const PREFIX = 'pls ';
const ping = require('minecraft-server-util');
const fs = require('fs');
const randomPuppy = require('random-puppy');
const usedCommandRecently = new Set();
var suggestion;
var killMethod;
var versionOfBot = '0.1.5';
var versionOfServer = '0.4';
var heymichaelvsaucehere = '‎‎‎‎‎‎‎‎ ';
let cash = require('./cash.json')

avexbot = require('./index');


bot.on('message', async message =>{
    if(!cash[message.author.id]){
        cash[message.author.id] = {
            cash: 250
        };
    }


    let cashAmt = Math.floor(Math.random() * 2) + 1;
    let baseAmt = Math.floor(Math.random() * 2) + 1;

    if(cashAmt === baseAmt){
        cash[message.author.id] = {
            cash: cash[message.author.id].cash + cashAmt
        }
        fs.writeFile("./cash.json", JSON.stringify(cash), (err) =>{
            if(err) console.log(err);
        })
    }
})




  bot.on('ready', () =>{
        bot.user.setActivity('pls help', { type: 'WATCHING' });
        console.log('FanMadeDankMemer is online!');
})





bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {  


        case '8ball':
            let msgArgs5 = args.slice(1).join(" ");
            if(!msgArgs5) return message.reply('what will u ask the 8ball')

            let msgChoose = Math.floor(Math.random() * 5) + 1;

            if(msgChoose == 1) return message.channel.send("🎱 Yes!")
            if(msgChoose == 2) return message.channel.send("🎱 No definitely not!")
            if(msgChoose == 3) return message.channel.send("🎱 Maybe 😉")
            if(msgChoose == 4) return message.channel.send("🎱 Probably.")
            if(msgChoose == 5) return message.channel.send("🎱 Proably not.")
        break;






        case 'pay':
            if(!cash[message.author.id]) return message.reply("You don't have any cash!");

            let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])

            if(!pUser) return message.reply("hey stoopid i couldnt find that user")

            if(!cash[pUser.id]){
                cash[pUser.id] = {
                    cash: 250
                };
            }

            let pCash = cash[pUser.id].cash;
            let sCash = cash[message.author.id].cash;

            if(sCash < args[2]) return message.reply("u can't pay someone more cash than u have dumb dumb");

            if(args[2] == undefined || isNaN) return message.reply("u cant pay someone, something else other than numbers u stoopid")
            cash[message.author.id] = {
                cash: sCash - parseInt(args[2])
            };

            cash[pUser.id] = {
                cash: pCash + parseInt(args[2])
            };

            message.channel.send(`${message.author.username} has given ${pUser.user.username} ${args[2]} cash.`);
            
            fs.writeFile("./cash.json", JSON.stringify(cash), (err) => {
                if(err) console.log(err)
            });
        break;


        case 'say':
                const Embed5 = new Discord.MessageEmbed()
                    .setColor(0xFFFF00)
                    .setTitle('Say')
                    .setDescription('>say (whatever I should say) <--- to make me say something.');

                if (!args[1]) {
                    message.channel.send(Embed5);
                    break;
                }
                let msgArgs4 = args.slice(1).join(" ");

                message.channel.bulkDelete(1);
                message.channel.send(msgArgs4);
                break;

                
        case 'beg':
        if(usedCommandRecently.has(message.author.id)){
            message.channel.send('lmao u cant just beg all the time xd')
            return
        }else{

            if(!cash[message.author.id]){
                cash[message.author.id] = {
                    cash: 250
                };
            }

            let chanceToGetMoney = Math.floor(Math.random() * 3) + 1;

            if(chanceToGetMoney == 1){
                var begged = Math.floor(Math.random() * 10) + 150;
                cash[message.author.id].cash = cash[message.author.id].cash + begged;
                
                message.channel.send('You received ' + begged + " cash from a stranger.")
                usedCommandRecently.add(message.author.id);
                setTimeout(() =>{
                    usedCommandRecently.delete(message.author.id);
                }, Math.floor(Math.random() * 30000) + 60000)
            }else{
                usedCommandRecently.add(message.author.id);
                setTimeout(() =>{
                    usedCommandRecently.delete(message.author.id);
                }, Math.floor(Math.random() * 30000) + 60000)
                message.channel.send("https://de.meming.world/images/de/thumb/7/74/No%2C_I_don%27t_think_I_will.jpg/300px-No%2C_I_don%27t_think_I_will.jpg")
            }}
        break;


        case 'meme':
            let reddit = [
                "memes",
                "MemeEconomy",
                "me_irl",
                "meirl",
                "Memes_Of_The_Dank"
            ]
            let subreddit = reddit[Math.floor(Math.random() * reddit.length)];


            randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                        files: [{
                            attachment: url,
                            name: 'meme.png'
                        }]
                    }).then(() => message.channel.send());
            }).catch(err => console.error(err));
        break;

        case 'wholesome':
            let reddit2 = [
                "wholesome"
            ]
            let subreddit2 = reddit2[Math.floor(Math.random() * reddit2.length)];

            randomPuppy(subreddit2).then(async url => {
                    await message.channel.send({
                        files: [{
                            attachment: url,
                            name: 'wholesome.png'
                        }]
                    }).then(() => message.channel.send());
            }).catch(err => console.error(err));
        break;

        case 'boobs':
            if(!message.channel.nsfw) return message.reply('You have to turn on NSFW on this channel to use this command.')

            let reddit3 = [
                "boobsnsfw"
            ]

            let subreddit3 = reddit3[Math.floor(Math.random() * reddit3.length)];

            randomPuppy(subreddit3).then(async url => {
                    await message.channel.send({
                        files: [{
                            attachment: url,
                            name: 'boobs.png'
                        }]
                    }).then(() => message.channel.send());
            }).catch(err => console.error(err));
        break;

        case 'dickpic':
            if(!message.channel.nsfw) {
                message.reply('You have to turn on NSFW on this channel to use this command.')
                return
            }

            let reddit4 = [
                "dickpics"
            ]
            
            let subreddit4 = reddit4[Math.floor(Math.random() * reddit4.length)];

            randomPuppy(subreddit4).then(async url => {
                    await message.channel.send({
                        files: [{
                            attachment: url,
                            name: 'boobs.png'
                        }]
                    }).then(() => message.channel.send());
            }).catch(err => console.error(err));
        break;

        case 'balance':
            if(!cash[message.author.id]){
                cash[message.author.id] = {
                    cash: 250
                };
            }

            if(!message.mentions.users.first()){

                let uCash = cash[message.author.id].cash;

                const balanceEmbed = new Discord.MessageEmbed()
                .setTitle(message.author.username + "'s balance")
                .setColor(0x00FF00)
                .addField("💸 **Total:**", "**" + uCash + "**")

                message.channel.send(balanceEmbed);
            }else{
                
                if(!cash[message.mentions.users.first().id]){
                    cash[message.mentions.users.first().id] = {
                        cash: 250
                    };
                }

                let uCash = cash[message.mentions.users.first().id].cash;

                const balanceEmbed = new Discord.MessageEmbed()
                .setAuthor(message.mentions.users.first().username)
                .setColor(0x00FF00)
                .addField("💸", uCash)

                message.channel.send(balanceEmbed);
            }
        break;

        case 'bal':
                if(!cash[message.author.id]){
                    cash[message.author.id] = {
                        cash: 250
                    };
                }
    
                if(!message.mentions.users.first()){
    
                    let uCash = cash[message.author.id].cash;
    
                    const balanceEmbed = new Discord.MessageEmbed()
                    .setTitle(message.author.username + "'s balance")
                    .setColor(0x00FF00)
                    .addField("💸 **Total:**", "**" + uCash + "**")
    
                    message.channel.send(balanceEmbed);
                }else{
                    
                    if(!cash[message.mentions.users.first().id]){
                        cash[message.mentions.users.first().id] = {
                            cash: 250
                        };
                    }
    
                    let uCash = cash[message.mentions.users.first().id].cash;
    
                    const balanceEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.mentions.users.first().username)
                    .setColor(0x00FF00)
                    .addField("💸", uCash)
    
                    message.channel.send(balanceEmbed);
                }
        break;


        case 'howpedo':
            var finalA = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6); // generate random hex color
            if(!message.mentions.users.first()){   
                let howpedo = Math.floor(Math.random() * 100) + 1

                const howpedoEmbed = new Discord.MessageEmbed()
                .setTitle('pedo r8 machine')
                .setDescription("You be " + howpedo + "% pedophilic 🐻")
                .setColor(finalA)
                message.channel.send(howpedoEmbed);
                return
            }

                let howpedo = Math.floor(Math.random() * 100) + 1

                const howpedoEmbed = new Discord.MessageEmbed()
                .setTitle('pedo r8 machine')
                .setDescription(message.mentions.users.first().username + " is " + howpedo + "% pedophilic 🐻")
                .setColor(finalA)
                message.channel.send(howpedoEmbed);
            break;



        case 'howgay':
            var finalA = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6); // generate random hex color
            if(!message.mentions.users.first()){   
                let howgay = Math.floor(Math.random() * 100) + 1

                const howgayEmbed = new Discord.MessageEmbed()
                .setTitle('gay r8 machine')
                .setDescription("You be " + howgay + "% gay 🏳️‍🌈")
                .setColor(finalA)
                message.channel.send(howgayEmbed);
                return
            }

                let howgay = Math.floor(Math.random() * 100) + 1

                const howgayEmbed = new Discord.MessageEmbed()
                .setTitle('gay r8 machine')
                .setDescription(message.mentions.users.first().username + " is " + howgay + "% gay 🏳️‍🌈")
                .setColor(finalA)
                message.channel.send(howgayEmbed);
            break;

            case 'pp':
                if(message.mentions.users.first()){
                    let ppSize = Math.floor(Math.random() * 10) + 0

                if(ppSize == 0) {
                    const ppEmbed = new Discord.MessageEmbed()
                    .setTitle('peepee size machine')
                    .setDescription(message.mentions.users.first().username + "'s penis:\n8D")
                    .setColor(0xFFFF00)
                    message.channel.send(ppEmbed);
                }else{
                    if(ppSize == 1) {
                    const ppEmbed = new Discord.MessageEmbed()
                    .setTitle('peepee size machine')
                    .setDescription(message.mentions.users.first().username + "'s penis:\n8=D")
                    .setColor(0xFFFF00)
                    message.channel.send(ppEmbed);
                }else{
                    if(ppSize == 2) {
                        const ppEmbed = new Discord.MessageEmbed()
                        .setTitle('peepee size machine')
                        .setDescription(message.mentions.users.first().username + "'s penis:\n8==D")
                        .setColor(0xFFFF00)
                        message.channel.send(ppEmbed);
                    }else{
                        if(ppSize == 3) {
                            const ppEmbed = new Discord.MessageEmbed()
                            .setTitle('peepee size machine')
                            .setDescription(message.mentions.users.first().username + "'s penis:\n8===D")
                            .setColor(0xFFFF00)
                            message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 4) {
                            const ppEmbed = new Discord.MessageEmbed()
                            .setTitle('peepee size machine')
                            .setDescription(message.mentions.users.first().username + "'s penis:\n8====D")
                            .setColor(0xFFFF00)
                            message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 5) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('peepee size machine')
                                    .setDescription(message.mentions.users.first().username + "'s penis:\n8=====D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 6) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('peepee size machine')
                                    .setDescription(message.mentions.users.first().username + "'s penis:\n8======D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 7) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('peepee size machine')
                                    .setDescription(message.mentions.users.first().username + "'s penis:\n8=======D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 8) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('peepee size machine')
                                    .setDescription(message.mentions.users.first().username + "'s penis:\n8========D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 9) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('peepee size machine')
                                    .setDescription(message.mentions.users.first().username + "'s penis:\n8=========D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 10) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('peepee size machine')
                                    .setDescription(message.mentions.users.first().username + "'s penis:\n8==========D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }
                            }
                            }
                            }
                            }
                        }
                    }
                }
                }{
                
            break;


    }}}}else{
        if(!message.mentions.users.first()){
            let author = message.author.username
            let ppSize = Math.floor(Math.random() * 10) + 0

            if(ppSize == 0) {
                const ppEmbed = new Discord.MessageEmbed()
                .setTitle('peepee size machine')
                .setDescription(author + "'s penis:\n8D")
                .setColor(0xFFFF00)
                message.channel.send(ppEmbed);
            }else{
                if(ppSize == 1) {
                const ppEmbed = new Discord.MessageEmbed()
                .setTitle('peepee size machine')
                .setDescription(author + "'s penis:\n8=D")
                .setColor(0xFFFF00)
                message.channel.send(ppEmbed);
            }else{
                if(ppSize == 2) {
                    const ppEmbed = new Discord.MessageEmbed()
                    .setTitle('peepee size machine')
                    .setDescription(author + "'s penis:\n8==D")
                    .setColor(0xFFFF00)
                    message.channel.send(ppEmbed);
                }else{
                    if(ppSize == 3) {
                        const ppEmbed = new Discord.MessageEmbed()
                        .setTitle('peepee size machine')
                        .setDescription(author + "'s penis:\n8===D")
                        .setColor(0xFFFF00)
                        message.channel.send(ppEmbed);
                    }else{
                        if(ppSize == 4) {
                        const ppEmbed = new Discord.MessageEmbed()
                        .setTitle('peepee size machine')
                        .setDescription(author + "'s penis:\n8====D")
                        .setColor(0xFFFF00)
                        message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 5) {
                                const ppEmbed = new Discord.MessageEmbed()
                                .setTitle('peepee size machine')
                                .setDescription(author + "'s penis:\n8=====D")
                                .setColor(0xFFFF00)
                                message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 6) {
                                const ppEmbed = new Discord.MessageEmbed()
                                .setTitle('peepee size machine')
                                .setDescription(author + "'s penis:\n8======D")
                                .setColor(0xFFFF00)
                                message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 7) {
                                const ppEmbed = new Discord.MessageEmbed()
                                .setTitle('peepee size machine')
                                .setDescription(author + "'s penis:\n8=======D")
                                .setColor(0xFFFF00)
                                message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 8) {
                                const ppEmbed = new Discord.MessageEmbed()
                                .setTitle('peepee size machine')
                                .setDescription(author + "'s penis:\n8========D")
                                .setColor(0xFFFF00)
                                message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 9) {
                                const ppEmbed = new Discord.MessageEmbed()
                                .setTitle('peepee size machine')
                                .setDescription(author + "'s penis:\n8=========D")
                                .setColor(0xFFFF00)
                                message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 10) {
                                const ppEmbed = new Discord.MessageEmbed()
                                .setTitle('peepee size machine')
                                .setDescription(author + "'s penis:\n8==========D")
                                .setColor(0xFFFF00)
                                message.channel.send(ppEmbed);
                        }
                        }}
                        
                        
                        
                
                
                    }}}}}}}}}}}});

bot.login(process.env.BOT_TOKEN1);
