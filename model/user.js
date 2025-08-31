const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/mydatabase`);

const userSchema =  mongoose.Schema({
  image: String,
  email: String,
  name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
