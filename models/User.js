const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Invalid Email Address'],
      required: 'Please Supply an email address'
    },
    name: {
      type: String,
      required: 'Please supply a name',
      trim: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});


module.exports = mongoose.model('User', userSchema);
