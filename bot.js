const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'ODA1MTM1MDU1MDg0MDYwNjgz.YBWecw.XkAq6cDjt-dbKK89RgdWzhwuvwE';
const prefix ="#";
bot.on('ready', () =>{
    console.log(`${bot.user.tag} is now online`)
    bot.user.setActivity("salam" , {type : "WATCHING"})
    bot.user.setStatus("idle")
})
bot.on('message' , message =>{

    if(message.author.id === "805135055084060683"){

        return;

    }

    let args = message.content.substring(prefix.length).split(" ")

    if(message.content.startsWith(prefix)){
        if(args[0] === "start"){

            message.channel.send("خب الان چه گهی میخوای بخوری")

        }
        if(args[0] === "link"){

            message.channel.send("http://hamyarkhah.ir")

        }
        if(args[0] === "send"){

           const channel =  bot.channels.cache.get("777278768876224557").send("خسته نباشی دلاور")
          
            console.log(channel)

        }
        if(args[0] === "help"){

            const help = new Discord.MessageEmbed().setTitle("<< Help >>")
            .addField("مشکل دارید؟" , "http://hamyarkhah.ir/#contact" , true)
            .addField("با سازنده کار داری؟" , "http://hamyarkhah.ir", true)
            .setThumbnail("https://static.toiimg.com/photo/72975551.cms")
            .setFooter(message.author.username, message.author.avatarURL())
            .setAuthor("AhmadReza Bashari")
            .setColor("33a8de")

            message.channel.send(help)

        }
    }
    if(!(message.content.startsWith(prefix))){

        if((message.content == "salam") || (message.content == "سلام") ){

            message.channel.send("سلام جیگر")

        }

    }
    else{
        message.channel.send("ی چیز درست حسابی بگو که بفهمم چی میگی ")

    }


})
bot.login(process.env.BOT_TOKEN);
