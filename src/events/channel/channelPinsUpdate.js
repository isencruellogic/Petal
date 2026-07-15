const { EmbedBuilder } = require('discord.js');
const { channelTypes } = require('../../constants/channelType');

module.exports = async (client, channel, time) => {

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    const embed = new EmbedBuilder()
        .setTitle(`🔧・Channel pins updated`)
        .setDescription(`Channel pins have been updated`)
        .addFields(
            { name: `> Name`,       value: `- ${channel.name}` },
            { name: `> ID`,         value: `- ${channel.id}` },
            { name: `> Category`,   value: `- ${channel.parent}` },
            { name: `> Channel`,    value: `- <#${channel.id}>` },
            { name: `> Type`,       value: `- ${channelTypes[channel.type]}` },
            { name: `> Pinned at`,  value: `- <t:${(time / 1000).toFixed(0)}>` }
        )

    // client.embed({
    //     title: ``,
    //     desc: ``,
    //     fields: [
   
    //     ]
    // }, logsChannel).catch(() => { })
};