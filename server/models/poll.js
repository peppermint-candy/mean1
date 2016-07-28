console.log('loaded models Poll')
var mongoose = require('mongoose')


var PollSchema = new mongoose.Schema({
  creator: {type: String, required: true},
  question: {type: String, required: true, minlength:8},
  option1: {type: String, required: true, minlength: 3},
  option2: {type: String, required: true, minlength: 3},
  option3: {type: String, required: true, minlength: 3},
  option4: {type: String, required: true, minlength: 3},
  vote1: {type: Number, required: true },
  vote2: {type: Number, required: true },
  vote3: {type: Number, required: true },
  vote4: {type: Number, required: true },
}, {timestamps: true})

mongoose.model('Poll', PollSchema)
