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
          description: 'May your solemn invocation be favored by Rex Lapis\' benevolence',
          image: { url: 'https://www.dropbox.com/s/tpdawusy3c0vr0a/Statue_of_the_Seven_Resonate_Geo.gif?dl=0' },
        }),
      ],
    })
  },
}
