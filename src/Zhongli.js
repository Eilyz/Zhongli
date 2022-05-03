import { Client, Collection } from 'discord.js'
import { config } from 'dotenv'
import loader from './util/loader.js'

config()

export const Zhongli = new Client({
  intents: 32767,
  presence: { status: 'dnd', activities: [{ type: 'LISTENING', name: '/modmail request' }] }
})
Zhongli.commands = new Collection()

await loader.loadCommands()
await loader.loadEvents()

await Zhongli.login()
