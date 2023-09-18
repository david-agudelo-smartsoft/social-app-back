const mongoose = require('mongoose');
const publicationSchema = new mongoose.Schema({
    id_usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tipoPublicacion: {
        type: String,
        required: true,
        default:['imagen', 'video', 'texto']
    },
    contenido: {
        type: String,
        required: true
    },
    id_evento: {
        type: mongoose.Types.ObjectId,
        ref: 'Evento',
        required: false
    }
},{
    timestamps: true,
    versionKey: false
}
);

const publicacionConUsuario = async () => {
    // 1 - Publication --> Usuario
    const resultado = await publicationSchema.aggregate(
        [
           {
                $lookup: {
                    from: 'Usuario',
                    localField: "id_usuario",
                    foreignField: "_id",
                    as: "usuarioPublicacion"
                }
           },{ $unwind: "$usuarioPublicacion"}
        ]
    )

    console.log(resultado);
}

module.exports = mongoose.model('Publicacion', publicationSchema);