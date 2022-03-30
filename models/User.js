const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,


    },
    email: {
        type: String,
        max: 50,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 6,
        max: 20,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    depart: {
        type: String,
    },
    city: {
        type: String,
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
},

    { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);