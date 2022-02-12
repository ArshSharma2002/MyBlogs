const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5
    },
    content:{
        type:String,
        required:true,
        minlength:20
    },
    slug:{
        type:String,
        required:true,
        minlength:3
    },
    publishedOn:{
        type: Date, 
        default: Date
    }

})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog