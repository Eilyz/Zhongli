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
          image: { url: 'https://cdn.discordapp.com/attachments/817493276793241663/927865370302361660/Statue_of_the_Seven_Resonate_Geo_1.gif' },
        }),
      ],
    }).catch(console.log)
  },
}
