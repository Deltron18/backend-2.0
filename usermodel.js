const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/mydatabase`);

const userSchema =  mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
