const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client()
const animal = require('animal-api')
client.on('ready', ()=> {
console.log(`Logged in as ${client.user.tag}`)
})
require('dotenv').config();
client.on('message', async(message)=> {
    let perfix = await db.fetch(`prefix_${message.guild.id}`)
    if(perfix === null) perfix = "!";
    let prefix = perfix;
    const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    if(command === "prefix"){
        if(message.member.hasPermission("MANAGE_CHANNELS")){
            if(args[0] == perfix) return message.channel.send('This is already the prefix of this server')
            if(!args[0]) return message.channel.send('What do u want the prefix to be?')
            db.set(`prefix_${message.guild.id}`, args[0])
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('Prefix Successully changed')
            .setDescription(`Prefix for this Server is been set to \`${args[0]}\``)
            .setColor('RANDOM'))
        }else{
            message.channel.send('You do not have permissions')
        }
    }

    if(command === "covid"){
        try{
        const {covid} = require('covid-api-2021')
        if(!args.length) return message.channel.send('Which country\'s Corona Cases Results you want?')
        covid(args.join(" "), result => {
            const embed = new Discord.MessageEmbed()
            .setTitle('Covid Info')
            .setDescription(result)
            .setColor('RANDOM')
            message.channel.send(embed)
        })
    }catch (e){
        message.channel.send(e)
    }
}
if(command === "script"){
    const {scripts} = require('random-scripts')
    scripts(res => {
        message.channel.send(res)
    })
}
if(command === "dog"){
    animal.dog(res => {
        const embed = new Discord.MessageEmbed()
        .setImage(res)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}
if(command === "cat"){
    animal.cat(res => {
        const embed = new Discord.MessageEmbed()
        .setImage(res)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}
if(command === "panda"){
    animal.panda(res => {
        const embed = new Discord.MessageEmbed()
        .setImage(res)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}
if(command === "redpanda"){
    animal.redpanda(res => {
        const embed = new Discord.MessageEmbed()
        .setImage(res)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}
if(command === "fox"){
    animal.fox(res => {
        const embed = new Discord.MessageEmbed()
        .setImage(res)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}
if(command === "birb"){
    animal.birb(res => {
        const embed = new Discord.MessageEmbed()
        .setImage(res)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}
if(command === "koala"){
    animal.koala(res => {
        const embed = new Discord.MessageEmbed()
        .setImage(res)
        .setColor("RANDOM")
        message.channel.send(embed)
    })
}
})
client.login(process.env.TOKEN)