const { EmbedBuilder } = require('discord.js');
const { channelTypes } = require('../../constants/channelType');

module.exports = async (client, channel, oldTopic, newTopic) => {

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    const embed = new EmbedBuilder()
        .setTitle(`🔧・Channel topic adjusted`)
        .setDescription(`One channel topic modified`)
        .setFields(
            { name: `> Old Topic`,  value: `- ${oldTopic}` },
            { name: `> New Topic`,  value: `- ${newTopic}` },
            { name: `> Name`,       value: `- ${channel.name}` },
            { name: `> ID`,         value: `- ${channel.id}` },
            { name: `> Category`,   value: `- ${channel.parent}` },
            { name: `> Channel`,    value: `- <#${channel.id}>` },
            { name: `> Type`,       value: `- ${channelTypes[channel.type]}` }
        )
    
    // client.embed({
    //     title: ``,
    //     desc: ``,
    //     fields: [

    //     ]
    // }, logsChannel).catch(() => { })
};