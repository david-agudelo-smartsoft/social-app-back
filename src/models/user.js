const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
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
    rol:{
        type: String,
        require: true,
        default: ['user', 'admin'],
    },
    fechaNacimiento:{
        type: Date,
        require: true,
    },
    telefono:{
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