import mongoose from 'mongoose'

const AbyssPoolSchema = new mongoose.Schema({
  unit: String,
})

export default mongoose.model('abyssPool', AbyssPoolSchema)
