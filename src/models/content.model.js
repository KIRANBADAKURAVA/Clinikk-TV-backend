import mongoose from 'mongoose'


//Content Schema

const contentSchema= new mongoose.Schema({

        adminId: {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'user'
        },

        title: {
            type : String,
            required: true
        },

        contentfile:{
            type : String,
            required: true
        },

        description:{
            type: String,
            required: true,
        },
     
        views:{
            type: Number,
            default: 0,
            required: true,
        },

        published:{
            type:Boolean,
            default: true,
            required:true
        },
        
        mediaType:{
            type: String,
            required: true
        }

},{timestamps: true})

contentSchema.plugin(mongooseAggregatePaginate)    // for using mongooseAggregatePaginate queries in videoschema

export const Content= mongoose.model('Content',contentSchema) // in database "content"