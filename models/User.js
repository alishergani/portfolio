const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: 'Write your email!'
  },
  name: {
    type: String,
    required: 'Write your name!',
    trim: true
  },
  password: {
    type: String,
    required: 'Set some password!',
    trim: true
  }
})
module.exports = mongoose.model('User', userSchema);
