const Publication = require('../models/publication');
const Event = require('../models/event');
const Notification = require('../models/notification');
const Follow = require('../models/follow');
const Mensaje = require('../models/mensaje');


const publicacionConUsuario = async () => {
    // 1 - Publication --> Usuario
    const resultado = await Publication.aggregate(
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

const publicacionConEvento = async () => {
    // 2 - Publication --> Evento
    const resultado = await Publication.aggregate(
        [
           {
                $lookup: {
                    from: 'Evento',
                    localField: "id_evento",
                    foreignField: "_id",
                    as: "eventoPublicacion"
                }
           },{ $unwind: "$eventoPublicacion"}
        ]
    )

    console.log(resultado);
}

const eventoConUsuario = async () => {
    // 3 - Evento --> Usuario
    const resultado = await Event.aggregate(
        [
           {
                $lookup: {
                    from: 'Usuario',
                    localField: "id_usuario",
                    foreignField: "_id",
                    as: "usuarioEvento"
                }
           },{ $unwind: "$usuarioEvento"}
        ]
    )

    console.log(resultado);
}

const notificacionConUsuario = async () => {
    // 4 - Notification --> Usuario
    const resultado = await Notification.aggregate(
        [
           {
                $lookup: {
                    from: 'Usuario',
                    localField: "id_usuario",
                    foreignField: "_id",
                    as: "usuarioNotificacion"
                }
           },{ $unwind: "$usuarioNotificacion"}
        ]
    )

    console.log(resultado);
}

const notificacionConPublicacion = async () => {
    // 5 - Notification --> Publication
    const resultado = await Notification.aggregate(
        [
           {
                $lookup: {
                    from: 'Publicacion',
                    localField: "id_publicacion",
                    foreignField: "_id",
                    as: "publicacionNotificacion"
                }
           },{ $unwind: "$publicacionNotificacion"}
        ]
    )

    console.log(resultado);
}

const usuarioConfollow = async () => {
    // 6 - Usuario --> Follow
    const resultado = await Follow.aggregate(
        [
           {
                $lookup: {
                    from: 'Follow',
                    localField: "_id",
                    foreignField: "id_usuario",
                    as: "followUsuario"
                }
           },{ $unwind: "$followUsuario"}
        ]
    )

    console.log(resultado);
}

const seguidorConUsuario = async () => {
    // 7 - Usuario --> Follow --> Usuario
    const resultado = await Follow.aggregate(
        [
           {
                $lookup: {
                    from: 'Follow',
                    localField: "_id",
                    foreignField: "seguidor",
                    as: "seguidorUsuario"
                }
           },{ $unwind: "$seguidorUsuario"}
        ]
    )

    console.log(resultado);
}

const seguidoConUsuario = async () => {
    // 8 - Usuario --> Follow --> Usuario
    const resultado = await Follow.aggregate(
        [
           {
                $lookup: {
                    from: 'Follow',
                    localField: "_id",
                    foreignField: "seguido",
                    as: "seguidoUsuario"
                }
           },{ $unwind: "$seguidoUsuario"}
        ]
    )

    console.log(resultado);
}

const emiteConUsuario = async () => {
    // 9 - Mensaje --> Usuario
    const resultado = await Mensaje.aggregate(
        [
           {
                $lookup: {
                    from: 'Usuario',
                    localField: "emite",
                    foreignField: "_id",
                    as: "usuarioEmisor"
                }
           },{ $unwind: "$usuarioEmisor"}
        ]
    )

    console.log(resultado);
}

const recibeConUsuario = async () => {
    // 10 - Mensaje --> Usuario
    const resultado = await Mensaje.aggregate(
        [
           {
                $lookup: {
                    from: 'Usuario',
                    localField: "recibe",
                    foreignField: "_id",
                    as: "usuarioReceptor"
                }
           },{ $unwind: "$usuarioReceptor"}
        ]
    )

    console.log(resultado);
}