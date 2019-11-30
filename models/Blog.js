const mongoose = require('mongoose');

const schema = mongoose.Schema;

const blogSchema = new schema({
    blogId:{
        type:String,
        unique:true
    },
    title:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    bodyHtml:{
        type:String,
        default:""
    },
    views:{
        type:Number,
        default:""
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    category:{
        type:String,
        default:""
    },
    author:{
        type:String,
        default:""
    },
    tags: [],
    created:{
        type:String,
        default:""
    },
    lastModified:{
        type:String,
        default:""
    }
})

mongoose.model('Blog',blogSchema);