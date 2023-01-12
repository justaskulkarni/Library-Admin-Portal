const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, 'product name must be provided']
    },
    author:{
        type: String,
        required: [true, 'product price must be provided']
    },
    status:{
        type: String, 
        enum:{
            values: ['available', 'issued'],
            message: '{VALUE} is not supported'                // This is the syntax to get value user is providing as in one coming in as a request
        }
        //enum: ['ikea', 'liddy', 'caressa', 'marcos']
    },
    /* featured:{
        type: Boolean, 
        default: false
    }, */
    issuer:{
        type: String,
        default: 'NA'
    },
    duedate:{
        type: String, 
        
    }
})

module.exports = mongoose.model('Book', bookSchema)