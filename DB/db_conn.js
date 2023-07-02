//Connecting to mongoDB:
const mongoose = require("mongoose")

const uri = "mongodb+srv://mystyx:by051W@mystyx.wewbubx.mongodb.net/Mystyxzen?retryWrites=true&w=majority"

mongoose.connect(uri)

//Adding schema:
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email:{
        type: String,
        lowercase: true
    },
    dateOfBirth: String,
    lifePath: Number,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})