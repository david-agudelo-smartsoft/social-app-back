const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    role:{
        type: String,
        require: true,
        default: ['user', 'admin'],
    },
    dateBirth:{
        type: Date,
        require: true,
    },
    phone:{
        type: Number,
        require: true,
    },
    avatar:{
        type: String,
        require: false,
    }    
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('User', userSchema);