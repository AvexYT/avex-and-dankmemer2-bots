const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const cheerio = require('cheerio');
const request = require('request');
const Canvas = require("canvas");
const PREFIX = '>';
const ping = require('minecraft-server-util');
const fs = require('fs');
var suggestion;
var killMethod;
var versionOfBot = '0.1.5';
var versionOfServer = '0.4';
var heymichaelvsaucehere = '‎‎‎‎‎‎‎‎ ';

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.get('710186116543676476');
    const welcomerTeam = member.guild.roles.cache.get('715454696160100463');
    const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle(`Welcome, ${member.user.username}!`)
    .setDescription(`Hey, ${welcomerTeam}! Welcome ${member.user.username}!\nHey ${member.user.username}, I recommend you read the rules first,\nso that you know what NOT to do.\n Other than that, welcome to the club!`)
    channel.send(welcomeEmbed);
    member.roles.add('708912047588638792');


})

bot.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.cache.get('712299098698678346');
    channel.send(`Bye bye, ${member.user.username}! Hope to see you soon! 😕`)
})



bot.on('guildMemberRemove', member =>{
    const MemberCountChannel = member.guild.channels.cache.get('712292791991926874');
    const UserCountChannel = member.guild.channels.cache.get('712356524235948132');

    let memberCount = member.guild.memberCount;
    let userCount = member.guild.memberCount - 8;

    MemberCountChannel.setName('💠 Member Count: ' + memberCount);
    UserCountChannel.setName('💠 User Count: ' + userCount);
});


bot.on('guildMemberAdd', member =>{
    const MemberCountChannel = member.guild.channels.cache.get('712292791991926874');
    const UserCountChannel = member.guild.channels.cache.get('712356524235948132');

    let memberCount = member.guild.memberCount;
    let userCount = member.guild.memberCount - 8;

    MemberCountChannel.setName('💠 Member Count: ' + memberCount);
    UserCountChannel.setName('💠 User Count: ' + userCount);
});







  bot.on('ready', () =>{
        bot.user.setActivity('Avex', { type: 'WATCHING' });
        console.log('AvexBot is online!');

        let guild = bot.guilds.cache.get('708907664666787850');

        const MemberCountChannel = guild.channels.cache.get('712292791991926874');
        const UserCountChannel = guild.channels.cache.get('712356524235948132');

        let memberCount = guild.memberCount;
        let userCount = guild.memberCount - 8;

        MemberCountChannel.setName('💠 Member Count: ' + memberCount);
        UserCountChannel.setName('💠 User Count: ' + userCount);
})


    bot.on('message', message => {
        let args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0]) {  
            

            case 'howgay':
            if(!message.mentions.users.first()) return message.reply('howgay who')

                let howgay = Math.floor(Math.random() * 100) + 1

                const howgayEmbed = new Discord.MessageEmbed()
                .setTitle('How gay is ' + message.mentions.users.first().username + '?')
                .setDescription(message.mentions.users.first().username + " is " + howgay + "% gay 🏳️‍🌈")
                .setColor(0xFF0000)
                message.channel.send(howgayEmbed);
            break;

            case 'pp':
                if(!message.mentions.users.first()) return message.reply("Who's pp size would u like to know?")

                let ppSize = Math.floor(Math.random() * 6) + 1

                if(ppSize == 1) {
                    const ppEmbed = new Discord.MessageEmbed()
                    .setTitle('Peepee machine')
                    .setDescription(message.mentions.users.first().username + "'s size:\n8=D")
                    .setColor(0xFFFF00)
                    message.channel.send(ppEmbed);
                }else{
                    if(ppSize == 2) {
                        const ppEmbed = new Discord.MessageEmbed()
                        .setTitle('Peepee machine')
                        .setDescription(message.mentions.users.first().username + "'s size:\n8==D")
                        .setColor(0xFFFF00)
                        message.channel.send(ppEmbed);
                    }else{
                        if(ppSize == 3) {
                            const ppEmbed = new Discord.MessageEmbed()
                            .setTitle('Peepee machine')
                            .setDescription(message.mentions.users.first().username + "'s size:\n8===D")
                            .setColor(0xFFFF00)
                            message.channel.send(ppEmbed);
                        }else{
                            if(ppSize == 4) {
                            const ppEmbed = new Discord.MessageEmbed()
                            .setTitle('Peepee machine')
                            .setDescription(message.mentions.users.first().username + "'s size:\n8====D")
                            .setColor(0xFFFF00)
                            message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 5) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('Peepee machine')
                                    .setDescription(message.mentions.users.first().username + "'s size:\n8=====D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }else{
                                if(ppSize == 6) {
                                    const ppEmbed = new Discord.MessageEmbed()
                                    .setTitle('Peepee machine')
                                    .setDescription(message.mentions.users.first().username + "'s size:\n8======D")
                                    .setColor(0xFFFF00)
                                    message.channel.send(ppEmbed);
                            }
                        }
                    }
               }}}
            break;


            case 'mc':
                if(!args[1]) return message.reply('You must tell me the server.')

                ping(args[1], 25565, (error, response) => {
                    if(error) throw error;
                    const MCEmbed = new Discord.MessageEmbed()
                    .setTitle('Server Information')
                    .addField('Server IP', response.host)
                    .addField('Server Version', response.version)
                    .addField('Online Players', response.onlinePlayers)
                    .addField('Max Players', response.maxPlayers)

                    message.channel.send(MCEmbed);
                });
            break;  


            case 'poll':
                const Embed = new Discord.MessageEmbed()
                    .setColor(0xFFFF00)
                    .setTitle('Inititate Poll')
                    .setDescription('!poll to create a simple yes or no poll.');
                if (!args[1]) {
                    message.channel.send(Embed);
                    break;
                }

                let msgArgs = args.slice(1).join(" ");

                message.channel.send("📋  " + "**" + "Poll: " + "** " + "**" + msgArgs + "**").then(messageReaction => {
                    messageReaction.react("👍");
                    messageReaction.react("👎");
                })

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

            case 'suggest':
                const Embed2 = new Discord.MessageEmbed()
                    .setColor(0xFFFF00)
                    .setTitle('Inititate Suggestion')
                    .setDescription('!suggest to suggest something.');

                if (!args[1]) {
                    message.channel.send(Embed2);
                    break;
                }

                let msgArgs2 = args.slice(1).join(" ");
                var suggestionChannel = bot.channels.cache.get('713097153593212978');

                message.reply('Your suggestion has been sent to the suggestions channel!');
                suggestionChannel.send("✋  " + "**" + "Suggestion: " + "** " + "**" + msgArgs2 + "**").then(messageReaction => {
                    messageReaction.react("⬆️");
                    messageReaction.react("⬇️");
                })

            case 'stab':
                if (!message.mentions.users.first()) return message.reply('Who do you want to stab?')
                if (message.mentions.users.first()) {
                    var fleedPerson = message.member
                    var murderedUser = message.mentions.users.first();

                    var chanceToMurder = Math.floor(Math.random() * 6) + 1
                    if (chanceToMurder == 6) {
                        message.channel.send(fleedPerson.nickname + " stabbed " + murderedUser.username + "!")
                        killMethod = "stabbing gif";
                        image(message);
                    } else {
                        message.channel.send(fleedPerson.nickname + ' tried to stab ' + murderedUser.username + ' but failed....')

                    }
                    fleedPerson.roles.add('714493599269650524');
                }
                break;

            case 'shoot':
                if (!message.mentions.users.first()) return message.reply('Who do you want to shoot?')
                if (message.mentions.users.first()) {
                    var fleedPerson = message.member
                    var murderedUser = message.mentions.users.first();
                    var chanceToMurder = Math.floor(Math.random() * 6) + 1
                    if (chanceToMurder == 6) {
                        message.channel.send(fleedPerson.nickname + " shot " + murderedUser.username + "!")
                        killMethod = "shooting gif";
                        image(message);
                    } else {
                        message.channel.send("Your pistol was jammed!")

                    }
                    fleedPerson.roles.add('714493599269650524');
                }
                break;



            case 'explode':
                if (!message.mentions.users.first()) return message.reply('Who do you want to blow up?')
                if (message.mentions.users.first()) {
                    var fleedPerson = message.member
                    var murderedUser = message.mentions.users.first();
                    var chanceToMurder = Math.floor(Math.random() * 6) + 1
                    if (chanceToMurder == 6) {
                        message.channel.send(fleedPerson.nickname + " blew up " + murderedUser.username + "!")
                        killMethod = "exploding gif";
                        image(message);
                    } else {
                        message.channel.send("Your C4 failed to detonate.")

                    }
                    fleedPerson.roles.add('714493599269650524');
                }
                break;


            case 'flee':
                var fleedPerson = message.member
                message.channel.bulkDelete(1);
                message.channel.send(fleedPerson.user.username + ' has fled!')
                var newName = Math.floor(Math.random() * 6) + 1
                if (newName == 1) {
                    fleedPerson.setNickname('LordMemer')
                } else {
                    if (newName == 2) {
                        fleedPerson.setNickname('life is miserable💔')
                    } else {
                        if (newName == 3) {
                            fleedPerson.setNickname('Dawg101')
                        } else {
                            if (newName == 4) {
                                fleedPerson.setNickname('YeRI')
                            } else {
                                if (newName == 5) {
                                    fleedPerson.setNickname('ThatOneBigBoi');
                                } else {
                                    if (newName == 6) {
                                        fleedPerson.setNickname('kelseen🤪');
                                    }
                                }
                            }
                        }
                    }
                }

                fleedPerson.roles.add('714493599269650524');



                break;

            case 'slap':
                if (!message.mentions.users.first()) return message.reply('Who do you want to slap?')
                if (message.mentions.users.first()) {
                    var slapUser = message.author.username
                    var slappedUser = message.mentions.users.first();


                    message.channel.send(slapUser + " slapped " + slappedUser.username + "!")
                    killMethod = "slapping gif";
                    image(message);
                }
                break;


            case 'hello':
                message.channel.send('https://media.giphy.com/media/YrZECW1GgBkqat6F0B/giphy.gif');
                break;

            case 'dance':
                message.channel.send('https://media.giphy.com/media/W6dHvprT7oks6BpX5R/giphy.gif');
                break;

               
             case 'instaorder':

             break;


            case 'execute':
                const user = message.mentions.users.first();
                if (user) {
                    if (!message.member.hasPermission('ADMINISTRATOR') || !message.member.roles.cache.find(r => r.name === "Moderator")) return message.reply('You do not have enough permissions.');
                    if (!args[1]) return message.reply('Please tell me who I should execute.')
                    let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
                    if (!person) return message.reply('❌ I could not find that person!')
                    let time = args[2]

                    if (!time) return message.reply('❌ Please tell me when the user should be executed.')

                    bot.channels.cache.get('708910322962137128').send(`${person} will be executed in ${ms(ms(time))}`);
                    setTimeout(function () {
                        person.ban('You have been executed.')
                        bot.channels.cache.get(`712299098698678346`).send(`${person} has been executed! The Secret Service and Presidentials have made that decision.`)
                    }, ms(time));
                    break;

                }
        }
    });

    function image(message){
 
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + killMethod,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
     
     
     
     
     
        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
     
     
            $ = cheerio.load(responseBody);
     
     
            var links = $(".image a.link");
     
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
           
            console.log(urls);
     
            if (!urls.length) {
               
                return;
            }
     
            // Send result
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });


        
    }


    

   bot.login(process.env.BOT_TOKEN2);
