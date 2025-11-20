import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId:{type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    body:{type: String, required: true},
    likes:{type: Number,default: 0},
    created:{type: Date, default: Date.now},
    updated:{type: Date,default: Date.now},
    media:{type: String, default: ''},
    active:{type: Boolean,default: true},
    filetype:{type: String, default: ''}
})

const Post = mongoose.model("Post", postSchema);

export {Post};