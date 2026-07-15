const { EmbedBuilder } = require('discord.js');
const { channelTypes } = require('../../constants/channelType');

module.exports = async (client, channel, oldName, newName) => {

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    const embed = new EmbedBuilder()
        .setTitle(`🔧・Channel name adjusted`)
        .setDescription(`One channel name modified`)
        .addFields(
            { name: `> Old Name`,   value: `- ${oldName}` },
            { name: `> New Name`,   value: `- ${newName}` },
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