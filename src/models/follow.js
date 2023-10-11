const mongoose = require('mongoose');
const followSchema = new mongoose.Schema({
    id_user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    follower: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followed: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true,
    versionKey: false
}
);
module.exports = mongoose.model('Follow', followSchema);