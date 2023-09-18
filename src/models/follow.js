const mongoose = require('mongoose');
const followSchema = new mongoose.Schema({
    id_usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    seguidor: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    seguido: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},{
    timestamps: true,
    versionKey: false
}
);
module.exports = mongoose.model('Follow', followSchema);