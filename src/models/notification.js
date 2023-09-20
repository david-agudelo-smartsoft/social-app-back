const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    id_user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    id_publication: {
        type: mongoose.Types.ObjectId,
        ref: 'Publication',
        required: true
    }
},  {
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('Notification', notificationSchema);