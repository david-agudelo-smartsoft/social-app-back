const mongoose = require('mongoose');

const UploadScheme = new mongoose.Schema(
    {
    url:{
        type: String,

    },
    filename:{
        type: String,
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("uploadModel", UploadScheme)
