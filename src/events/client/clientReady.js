const { EmbedBuilder, ActivityType, WebhookClient, PresenceUpdateStatus } = require('discord.js');
const config = require('../../config/bot');
const { colors, name } = config;

const { version } = require('../../../package.json');

module.exports = async (client) => {
    // Console logs
    if (client.shard) {
        console.log(`System: Shard #${client.shard.ids[0] + 1} is ready!`);
    } else {
        console.log('System: Bot is ready!');
    }

    console.log(`Bot: Started on ${client.guilds.cache.size} servers!`);

    // Startup webhook
    if (client.webhooks?.startLogs?.id && client.webhooks?.startLogs?.token) {
        const startLogs = new WebhookClient({
            id: client.webhooks.startLogs.id,
            token: client.webhooks.startLogs.token,
        });

        const embed = new EmbedBuilder()
            .setTitle('🆙・Bot Started')
            .setDescription('The bot is now ready.')
            .setColor(colors.normal);

        if (client.shard) {
            embed.addFields(
                {
                    name: '🆔┆Shard',
                    value: `${client.shard.ids[0] + 1}/${client.options.shardCount}`,
                    inline: true,
                },
                {
                    name: '📃┆State',
                    value: 'Ready',
                    inline: true,
                }
            );
        }

        startLogs.send({
            username: `${name} Logs`,
            embeds: [embed],
        }).catch(console.error);
    }

    const updatePresence = async () => {
        try {
            let totalGuilds;

            if (client.shard) {
                const results = await client.shard.fetchClientValues('guilds.cache.size');
                totalGuilds = results.reduce((a, b) => a + b, 0);
            } else {
                totalGuilds = client.guilds.cache.size;
            }

            const statusText = [
                '❓ /help',
                `💻 ${totalGuilds} servers`,
                '📨 discord.gg/corwindev',
                '🎉 400+ commands',
                `🏷️ Version ${version}`,
            ];

            const activity = statusText[Math.floor(Math.random() * statusText.length)];

            await client.user.setPresence({
                activities: [
                    {
                        name: activity,
                        type: ActivityType.Playing,
                    },
                ],
                status: PresenceUpdateStatus.DoNotDisturb,
            });

            console.log(`Presence updated: ${activity}`);
        } catch (err) {
            console.error('Failed to update presence:', err);
        }
    };

    // Set immediately
    await updatePresence();

    // Rotate every 50 seconds
    setInterval(updatePresence, 50_000);
};