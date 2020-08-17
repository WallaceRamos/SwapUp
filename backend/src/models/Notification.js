const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    approved:Boolean,
    title: String,
    category: String,
    description: String,
    serviceImage: String,
    userRegister: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    },
}
);

module.exports = mongoose.model('Notification', NotificationSchema);
