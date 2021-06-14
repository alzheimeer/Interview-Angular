var { Schema, model } = require("mongoose");

var UserSchema = Schema({
    surname: {
        type: String,
        required: true,
    },
    secondSurname: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    othersName: {
        type: String,
        required: false,
        default: ''
    },
    country: {
        type: String,
        required: true,
    },
    typeID: {
        type: String,
        required: true,
    },
    numID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dateEntry: {
        type: Date,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Activo'
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('User', UserSchema);