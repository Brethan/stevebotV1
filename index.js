const Discord = require('discord.js');

const bot = new Discord.Client();

// const SHREK_ROLE = '671511034808238090';
const ECOR_1041 = '749070257918050397';
const ECOR_1043 = '749070386007638016';
const ECOR_1045 = '749070525644406978';
const ECOR_1047 = '749070635833229313';
const CHEM_1101 = '749070875260747817';
const CHEM_1001 = '749070970660323360';
const MATH_1004 = '749070714472235199';
const PHYS_1004 = '749071175073923173';
const COOP_1000 = '763976832701431870';

bot.on('message', (message) => {
    const parts = message.content.split(' ');
    const embedBoi = new Discord.MessageEmbed()
        .setColor('#4099f7')
        .setTitle('Slap on some class roles!')
        .setDescription('To add a class role to yourself type "s.role add [class]".\nTo remove a class role from yourself, type "s.role remove [class]"\n*[Class] refers to what\'s in quotations*\n\n**Role List:**\n\n\n**ECOR 1041/1042:**\t "ecor1041"\n\n\n**ECOR 1043/1044:**\t "ecor1043"\n\n\n**ECOR 1045/1046:**\t "ecor1045"\n\n\n**ECOR 1047/1048:**\t "ecor1047"\n\n\n**CHEM 1001/1002:**\t "chem1001" or "genchem"\n\n\n**CHEM 1101:**\t "chem1101" or "engchem"\n\n\n**MATH 1004/1104:**\t "math1004" or "calc" or "linalg"\n\n\n**PHYS 1004:**\t "phys1004" or "waves"\n');
    console.log(parts);

    const coopEmbed = new Discord.MessageEmbed()
        .setColor('#4099f7')
        .setTitle('Slap on the COOP1000 role!')
        .setAuthor('written by steve')
        .setDescription('Adding that COOP1000 role is easy as pie\n\nCOOP1000\t\t*"s.role add coop1000"* or *"s.role add coop"*')
        .setImage('https://vignette.wikia.nocookie.net/nintendo/images/8/83/Super_Smash_Bros._Ultimate_-_Character_Art_-_Pikachu.png/revision/latest?cb=20190710193145&path-prefix=en');
        
    //if (message.content == 'saggy nuts') {
    //    message.channel.send(coopEmbed);
    //} 

    //Adding or removing roles
    if(message.content.toLowerCase() == 'sid') {
        message.channel.send('https://cdn.discordapp.com/attachments/671308707975397376/749863946961289277/unknown.png');
    }
    if(message.content.toLowerCase() == 'matt' || message.content.toLowerCase() == "matthew") {
        message.channel.send('https://cdn.discordapp.com/attachments/671526424326307870/749871161181077564/Shrek_28character29.png');
    }
    if (parts[0].toLowerCase() == 's.role') {

        //Adding roles
        if (parts[1] == 'add') {

            if (parts[2] == 'ecor1041') {
            
                message.channel.send('You are now subscribed to ECOR 1041/1042')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(ECOR_1041);
            }

            if (parts[2] == 'ecor1043') {
                
                message.channel.send('You are now subscribed to ECOR 1043/1044')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(ECOR_1043);
            }

            if (parts[2] == 'ecor1045') {
                
                message.channel.send('You are now subscribed to ECOR 1045/1046')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(ECOR_1045);
            }

            if (parts[2] == 'ecor1047') {
                
                message.channel.send('You are now subscribed to ECOR 1047/1048')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(ECOR_1047);
            }

            if (parts[2] == 'chem1001' || parts[2] == 'genchem') {
                
                message.channel.send('You are now subscribed to CHEM 1001/1002')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(CHEM_1001);
            }

            if (parts[2] == 'chem1101' || parts[2] == 'engchem') {
                
                message.channel.send('You are now subscribed to CHEM 1101')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(CHEM_1101);
            }

            if (parts[2] == 'math1004' || parts[2] == 'calc' || parts[2] == 'linalg') {
                
                message.channel.send('You are now subscribed to MATH 1004/1104')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(MATH_1004);
            }

            if (parts[2] == 'phys1004' || parts[2] == 'waves') {
                
                message.channel.send('You are now subscribed to PHYS 1004')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.add(PHYS_1004);
            }
            if (parts[2] == 'coop' || parts[2] == 'coop1000') {
                
                message.channel.send('You are now subscribed to COOP 1000')
                    .then(msg => {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);

                message.member.roles.add(COOP_1000);
            }
    
            
            setTimeout(() => {message.delete(); }, 3000);
        }

        if (parts[1] == 'remove') {

            if (parts[2] == 'ecor1041') {
            
                message.channel.send('You are now unsubscribed to ECOR 1041/1042')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(ECOR_1041);
            }
            if (parts[2] == 'ecor1043') {
                
                message.channel.send('You are now unsubscribed to ECOR 1043/1044')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(ECOR_1043);
            }
            if (parts[2] == 'ecor1045') {
                
                message.channel.send('You are now unsubscribed to ECOR 1045/1046')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(ECOR_1045);
            }
            if (parts[2] == 'ecor1047') {
                
                message.channel.send('You are now unsubscribed to ECOR 1047/1048')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(ECOR_1047);
            }
            if (parts[2] == 'chem1001' || parts[2] == 'genchem') {
                
                message.channel.send('You are now unsubscribed to CHEM 1001/1002')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(CHEM_1001);
            }
            if (parts[2] == 'chem1101' || parts[2] == 'engchem') {
                
                message.channel.send('You are now unsubscribed to CHEM 1101')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(CHEM_1101);
            }
            if (parts[2] == 'math' || parts[2] == 'calc' || parts[2] == 'linalg') {
                
                message.channel.send('You are now unsubscribed to MATH 1004/1104')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(MATH_1004);
            }
            if (parts[2] == 'phys1004' || parts[2] == 'waves') {
                
                message.channel.send('You are now unsubscribed to PHYS 1004')
                    .then(msg =>  {
                        msg.delete({timeout: 4000})
                    })
                    .catch(console.error);
            
                message.member.roles.remove(PHYS_1004);
            }
    
            
            setTimeout(() => {message.delete(); }, 3000);
        }
        
    }

    /*Responds in chat when someone says */
    if (message.content.toLowerCase() == 'hey steve') {
        message.channel.send('https://www.youtube.com/watch?v=6K72mwt1_5c');
    }

    if (parts[0] == 'zak' || parts[1] == 'zak'|| parts[2] == 'zak' || parts[3] == 'zak' || parts[4] == 'zak') {
        message.channel.send('Light theme is objectively bad.');
    }


    if (parts[0].toLowerCase() == 'steve') {
        message.channel.send(":eyes:");
    }

    if (message.member == '257681718574710787') {
        message.react('748710598640140449');
        message.react('672231755725406218');
    }
    if (message.content.toLowerCase() == "what time is it?") {
        message.channel.send("It's Sponsor Time!\nEnter Code DISCENG at checkout to get 10% off your order for any Rogue Energy Product\nhttps://www.rogueenergy.com/?rfsn=4797220.c4cada&utm_source=refersion&utm_medium=affiliate&utm_campaign=4797220.c4cada");
    }
    if (message.content.toLowerCase() == "how will i ever power my study sessions?") {
        message.channel.send("Head on over to Rogue Energy and Enter Code DISCENG to get 10% off your first order\nhttps://www.rogueenergy.com/?rfsn=4797220.c4cada&utm_source=refersion&utm_medium=affiliate&utm_campaign=4797220.c4cada");
    }
    if ((message.member == "520341507987865610" || message.member == "227538583454482432") && message.content.toLowerCase() == "weeb") {
        message.delete();
        message.channel.send("no.")
            .then(msg => {
                msg.delete({timeout: 2000})
            })
            .catch(console.error);
    }

});

bot.login('prefix token goes here');
