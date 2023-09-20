const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    reaction:{
        type: String,
        required: false,
        default: ['👍', '💚', '😄', '😲', '😥', '😠']
    },
    comment:{
        type: String,
        required: false,
    },
    id_user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('Event', eventSchema);