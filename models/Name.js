const mongoose = require('mongoose')

const NameSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
    given: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
nameList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NameList",
}
})

module.exports = mongoose.model('Name', NameSchema)
