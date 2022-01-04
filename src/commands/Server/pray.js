import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, MessageEmbed } from 'discord.js'

export default {
  directory: 'Server',
  usage: 'pray',
  requirements: 'Members',

  data: new SlashCommandBuilder()
    .setName('pray')
    .setDescription('Pray to me.'),

  /** @param {CommandInteraction} interaction */
  execute: async function (interaction) {
    await interaction.deferReply()
    await interaction.editReply({
      embeds: [
        new MessageEmbed({
          color: 'YELLOW',
          title: 'May your solemn invocation be favored by Rex Lapis\' benevolence',
          image: { url: 'https://previews.dropbox.com/p/thumb/ABYBKHMtz-CaLiu1ilRuM3WmD_OJzqNa-zXHC8yiC5KBZONhaM7SKhvSK-Q8BVbzfu-6OqdeGAJrOhwYaUv8NsCyV8uuNBioMS6KbNhdAXAZ7a_vjXiMce9meZs2u9wSLz-pVAqnlFlK8JI7qlfEFAET_q6I7Vy_u2FH3J7o2kC4I8LlQaAZ4xWF5zMn99y1d9UJ6WQUsMtseGYvQybYXhBtNz27ioh9hDuVlrKRctLq5ju6mrCLWLZt6sOxOJSwyYcVnSfKN_GqlEQ0kYc68F73foE4k6syXVgu4aeLpT2Zs2WbpusCe677r6CHrNLuWb-VuvKSTflMxHfdMkyECIslMeh9URLDJixFIBUdvuXXiVpNIwzQBpjMQuNuRE9AmLTvm3hfyuK5AsAuNURMc8nd2_muFt6j7n9spbAhyiF0P8i7-YzUolooybXKnXLSpjRhCw8iLb7hudz_26B1wgOOF70xxklPJse1XjsjSKYwQg/p.gif' },
        }),
      ],
    })
  },
}
