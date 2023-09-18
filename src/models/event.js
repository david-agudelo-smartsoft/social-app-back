const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    reaccion:{
        type: String,
        required: false,
        default: ['👍', '💚', '😄', '😲', '😥', '😠']
    },
    comentario:{
        type: String,
        required: false,
    },
    id_usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},{
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('Evento', eventSchema);