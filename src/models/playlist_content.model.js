import mongoose from "mongoose";


const playlistcontentSchema= mongoose.Schema({

   playlistId:{
    typeof: mongoose.Schema.Types.ObjectId,
    ref: 'playlist'
   } ,
   
   contentId :{
    typeof: mongoose.Schema.Types.ObjectId,
    ref: 'content'
   } 

},{timestamps: true}) 

export const Playlist_Content= mongoose.model('Playlist_Content', playlistcontentSchema)