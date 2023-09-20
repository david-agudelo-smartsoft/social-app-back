const Publication = require('../models/publication');
const Event = require('../models/event');
const Notification = require('../models/notification');
const Follow = require('../models/follow');
const Message = require('../models/message');


const publicationUser = async () => {
    // 1 - Publication --> Usuario
    const resultado = await Publication.aggregate(
        [
           {
                $lookup: {
                    from: 'User',
                    localField: "id_user",
                    foreignField: "_id",
                    as: "userPublication"
                }
           },{ $unwind: "$userPublication"}
        ]
    )

    console.log(resultado);
}

const publicationEvent = async () => {
    // 2 - Publication --> Event
    const result = await Publication.aggregate(
        [
           {
                $lookup: {
                    from: 'Event',
                    localField: "id_event",
                    foreignField: "_id",
                    as: "eventPublication"
                }
           },{ $unwind: "$eventPublication"}
        ]
    )

    console.log(result);
}

const eventUser = async () => {
    // 3 - Event --> User
    const resultado = await Event.aggregate(
        [
           {
                $lookup: {
                    from: 'User',
                    localField: "id_user",
                    foreignField: "_id",
                    as: "userEvent"
                }
           },{ $unwind: "$userEvent"}
        ]
    )

    console.log(resultado);
}

const notificationUser = async () => {
    // 4 - Notification --> User
    const result = await Notification.aggregate(
        [
           {
                $lookup: {
                    from: 'User',
                    localField: "id_user",
                    foreignField: "_id",
                    as: "userNotification"
                }
           },{ $unwind: "$userNotification"}
        ]
    )

    console.log(result);
}

const notificationPublicacation = async () => {
    // 5 - Notification --> Publication
    const result = await Notification.aggregate(
        [
           {
                $lookup: {
                    from: 'Publication',
                    localField: "id_publication",
                    foreignField: "_id",
                    as: "publicationNotification"
                }
           },{ $unwind: "$publicationNotification"}
        ]
    )

    console.log(result);
}

const userfollow = async () => {
    // 6 - User --> Follow
    const result = await Follow.aggregate(
        [
           {
                $lookup: {
                    from: 'Follow',
                    localField: "_id",
                    foreignField: "id_user",
                    as: "followUser"
                }
           },{ $unwind: "$followUser"}
        ]
    )

    console.log(result);
}

const followerUser = async () => {
    // 7 - User --> Follow --> User
    const result = await Follow.aggregate(
        [
           {
                $lookup: {
                    from: 'Follow',
                    localField: "_id",
                    foreignField: "follower",
                    as: "followerUser"
                }
           },{ $unwind: "$followerUser"}
        ]
    )

    console.log(result);
}

const followedUser = async () => {
    // 8 - User --> Follow --> User
    const result = await Follow.aggregate(
        [
           {
                $lookup: {
                    from: 'Follow',
                    localField: "_id",
                    foreignField: "followed",
                    as: "followedUser"
                }
           },{ $unwind: "$followedUser"}
        ]
    )

    console.log(result);
}

const emitsUser = async () => {
    // 9 - Message --> User
    const result = await Message.aggregate(
        [
           {
                $lookup: {
                    from: 'User',
                    localField: "emits",
                    foreignField: "_id",
                    as: "userEmits"
                }
           },{ $unwind: "$userEmits"}
        ]
    )

    console.log(result);
}

const receivesUser = async () => {
    // 10 - Message --> User
    const result = await Message.aggregate(
        [
           {
                $lookup: {
                    from: 'User',
                    localField: "receives",
                    foreignField: "_id",
                    as: "userReceiver"
                }
           },{ $unwind: "$userReceiver"}
        ]
    )

    console.log(result);
}