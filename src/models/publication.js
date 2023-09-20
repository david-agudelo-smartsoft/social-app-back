const mongoose = require('mongoose');
const publicationSchema = new mongoose.Schema({
    id_user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    typePublication: {
        type: String,
        required: true,
        default:['imagen', 'video', 'texto']
    },
    content: {
        type: String,
        required: true
    },
    id_event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event',
        required: false
    }
},{
    timestamps: true,
    versionKey: false
}
);

const publicationUser = async () => {
    // 1 - Publication --> User
    const result = await publicationSchema.aggregate(
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

    console.log(result);
}


module.exports = mongoose.model('Publication', publicationSchema);