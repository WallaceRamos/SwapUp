const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  userImage: String,
  name: String,
  email: String,
  birthdate: String,
  address: String,
  password: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.virtual('userImage_url').get(function () {
  return `${global.IP_ADDRESS}/images/${this.userImage}`;
});

module.exports = mongoose.model('User', UserSchema);
