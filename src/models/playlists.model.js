import mongoose, { model } from "mongoose";

const playlistSchema= mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        // required: true
    },

   
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        
    }

},{timestamps: true}) 

export const Playlist= mongoose.model('Playlist', playlistSchema)