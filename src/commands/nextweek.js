const { InteractionResponseType } = require('discord-interactions');

module.exports = {
  name: 'nextweek',
  description: 'offset the schedule by 1 week',
  execute: async ({ interaction, response }) => {
    const guildid = interaction.guild_id
    const oldWeek = await NAMESPACE.get(guildid);
    const newWeek = (oldWeek === "0" ? "1" : "0");
    await NAMESPACE.put(guildid, newWeek)
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "set to next week"
      },
    });
  }
};
