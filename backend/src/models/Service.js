const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  serviceImage: String,
  title: String,
  category: String,
  description: String,
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  toJSON: {
    virtuals: true,
  },
});

ServiceSchema.virtual('serviceImage_url').get(function () {
  return `${global.IP_ADDRESS}/images/${this.serviceImage}`;
});

module.exports = mongoose.model('Service', ServiceSchema);
