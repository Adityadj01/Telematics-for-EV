const mongoose = require('mongoose')

const Profile=  new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    fname:{
        type: String,
    },
    mname:{
        type: String,
    },
    lname:{
        type: String,
    },
    vehicleregno:{
        type: String,
    },
    insuranceid:{
        type: String,
    },
    address: {
        type : String,
    },
    dateOfBirth: {
        type : Date,
    },
    gender: {
        type : String,
    }
})