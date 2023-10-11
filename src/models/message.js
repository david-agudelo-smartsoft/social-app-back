const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    emits:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receives:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message:{
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Message', messageSchema);
    