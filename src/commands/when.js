const { InteractionResponseType } = require('discord-interactions');
const dayjs = require('dayjs')
const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)

module.exports = {
  name: 'when',
  description: 'When the session will be',
  execute: async ({ interaction, response }) => {
    const weekno = await NAMESPACE.get(interaction.guild_id);
    const nowWeek = dayjs().startOf("w")
    const isWeek = (nowWeek.week() % 2 == weekno);
    const nextDate = isWeek ? nowWeek : nowWeek.add(1, 'week')
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `Week of ${nextDate.format("MMM D")}`
      },
    });
  }
};
