const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    emite:{
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    recibe:{
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje:{
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Mensaje', messageSchema);
    