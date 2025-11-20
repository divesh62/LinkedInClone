import mongoose , {Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
         type: String,  
         required: true
    },

    active: {
        type: String,
        default: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default:""
    },
    createdAt:{
        type: Date,
        default : Date.now
    },
    token:{
        type: String
    }
})

let User = mongoose.model("User", userSchema);

export {User};