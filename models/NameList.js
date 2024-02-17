const mongoose = require('mongoose')

const NameListSchema = new mongoose.Schema({
    titleOfNameList: {
        type: String,
       
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

module.exports = mongoose.model('NameList', NameListSchema)
