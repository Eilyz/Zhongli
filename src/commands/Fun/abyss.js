import { CommandInteraction } from 'discord.js'

import { SlashCommandBuilder } from '@discordjs/builders'

import AbyssPool from '../../database/models/abyssPool.js'

export default {
  directory: 'Fun',
  usage: `Go Figure`,
  requirements: 'Members',

  data: new SlashCommandBuilder()
    .setName('abyss')
    .setDescription('Abyss gamba.')
    .addSubcommand(add_unit => add_unit
      .setName('add-unit')
      .setDescription('Add a unit to the abyss pool.')
      .addStringOption(unit => unit
        .setName('unit')
        .setDescription('Unit to add')
        .setRequired(true)))
    .addSubcommand(remove_unit => remove_unit
      .setName('remove-unit')
      .setDescription('Remove a unit from the abyss pool.')
      .addStringOption(unit => unit
        .setName('unit')
        .setDescription('Unit to remove')
        .setRequired(true)),
    )
    .addSubcommand(team => team
      .setName('team')
      .setDescription('Roll 2 random abyss teams.'))
    .addSubcommand(roll => roll
      .setName('roll')
      .setDescription('Roll a random character.')),

  /** @param {CommandInteraction} interaction */
  execute: async function (interaction) {
    await interaction.deferReply()
    const cmd = interaction.options.getSubcommand()
    const unit = interaction.options.getString('unit')

    switch (cmd) {
      case 'add-unit':
        if (!interaction.memberPermissions.has(1n << 3n))
          return await interaction.editReply('Insufficient permissions.')

        AbyssPool.findOne({ unit }, {}, {}, async (err, data) => {
          if (err) throw err
          if (!data) {
            data = new AbyssPool({
              unit: unit,
            })
            await data.save()
            await interaction.editReply(`Added \`${unit}\` to the abyss pool.`)
          } else {
            await interaction.editReply(`\`${unit}\` is already in the abyss pool.`)
          }
        })
        break
      case 'remove-unit':
        if (!interaction.memberPermissions.has(1n << 3n))
          return await interaction.editReply('Insufficient permissions.')

        AbyssPool.findOne({ unit }, {}, {}, async (err, data) => {
          if (err) throw err
          if (!data)
            await interaction.editReply(`\`${unit}\` doesn't exist.`)
          else {
            data.delete()
            await interaction.editReply(`Removed \`${unit}\` from the abyss pool.`)
          }
        })
        break
      case 'team':
        AbyssPool.find((err, data) => {
          if (err) throw err
          if (!data.length) return interaction.editReply('No units found in the abyss pool.')

          let randomUnit = data[Math.floor(Math.random() * data.length)]['unit']
          let team1 = []
          let team2 = []

          while (team1.length <= 3 && team2.length <= 3) {
            randomUnit = data[Math.floor(Math.random() * data.length)]['unit']
            if (team1.includes(randomUnit)) continue
            team1.push(randomUnit)
            randomUnit = data[Math.floor(Math.random() * data.length)]['unit']
            if (team2.includes(randomUnit)) continue
            team2.push(randomUnit)

            if (team1.length === 4 && team2.length === 4)
              return interaction.editReply(`Team 1: ${team1.join(' / ')}\nTeam 2: ${team2.join(' / ')}`)
          }
        })
        break
      case 'roll':
        AbyssPool.find((err, data) => {
          if (err) throw err
          if (!data.length) return interaction.editReply('No units found in the abyss pool.')

          let randomUnit = data[Math.floor(Math.random() * data.length)]['unit']

          interaction.editReply(`Rolled ${randomUnit}.`)
        })
        break
    }
  },
}
