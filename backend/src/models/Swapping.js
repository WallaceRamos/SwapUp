const mongoose = require('mongoose');

const SwappingSchema = new mongoose.Schema({
  status: Boolean,
  serviceImage: String,
  title: String,
  category: String,
  description: String,
   swappedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  },
}, 
);

module.exports = mongoose.model('Swapping', SwappingSchema);
