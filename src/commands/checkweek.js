const { InteractionResponseType } = require('discord-interactions');
const dayjs = require('dayjs')
const isoWeek = require('dayjs/plugin/isoWeek')
dayjs.extend(isoWeek) 

module.exports = {
  name: 'checkweek',
  description: 'check if this week is the week',
  execute: async ({ interaction, response }) => {
    const weekno = await NAMESPACE.get("week-no");
    const nowWeek = dayjs().startOf("w").week()
    const isWeek = (nowWeek % 2 == weekno)
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: (isWeek ? "This week" : "Next week")
      },
    });
  }
};
