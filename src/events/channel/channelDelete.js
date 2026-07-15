const { EmbedBuilder } = require('discord.js');
const { channelTypes } = require('../../constants/channelType');

module.exports = async (client, channel) => {

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    const embed = new EmbedBuilder()
        .setTitle(`🔧・Channel deleted`)
        .setDescription(`A channel has been deleted`)
        .addFields(
            { name: `> Name`,       value: `- ${channel.name}` },
            { name: `> ID`,         value: `- ${channel.id}` },
            { name: `> Category`,   value: `- ${channel.parent}` },
            { name: `> Type`,       value: `- ${channelTypes[channel.type]}` }
        )

    // client.embed({
    //     title: ``,
    //     desc: ``,
    //     fields: [

    //     ]
    // }, logsChannel).catch(() => { })

    // try {
    //     ticketChannels.findOne({ Guild: channel.guild.id, channelID: channel.id }, async (err, data) => {
    //         if (data) {
    //             var remove = await ticketChannels.deleteOne({ Guild: channel.guild.id, channelID: channel.id });
    //         }
    //     })
    // }
    // catch { }
};