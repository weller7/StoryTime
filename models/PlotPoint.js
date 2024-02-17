const mongoose = require('mongoose')

const PlotPointSchema = new mongoose.Schema({
    plotPoint: {
    type: String,
    required: true,
  },
    completed: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
outline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outline",
}
})

module.exports = mongoose.model('PlotPoint', PlotPointSchema)
