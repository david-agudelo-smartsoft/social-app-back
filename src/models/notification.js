const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema({
    mensaje: {
        type: String,
        required: true
    },
    id_usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    id_publicacion: {
        type: mongoose.Types.ObjectId,
        ref: 'Publicacion',
        required: true
    }
},  {
    timestamps: true,
    versionKey: false
}
);

module.exports = mongoose.model('Notificacion', notificationSchema);