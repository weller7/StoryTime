const mongoose = require('mongoose')

const OutlineSchema = new mongoose.Schema({
    titleOfOutline: {
        type: String,
        required: true,
      },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
status: {
    type: String,
    default: 'public',
    enum: ['public', 'private'],
},
})

module.exports = mongoose.model('Outline', OutlineSchema)
