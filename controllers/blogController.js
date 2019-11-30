const express = require('express');
const mongoose = require('mongoose');
const shortId = require('shortid');

const BlogModel = mongoose.model('Blog');

const response = require('./../libs/response');

const time = require('./../libs/time');

const validCheck = require('./../libs/checklib');

const logger = require('./../libs/loggerlib');




// create a new blog
let create = (req, res) =>{
    let today = Date.now();
    let id = shortId.generate();

    let newBlog = new BlogModel({

        blogId : id,
        title : req.body.title,
        description : req.body.description,
        bodyHtml : req.body.blogBody,
        isPublished : true,
        category : req.body.category,
        author : req.body.author,
        created : time.timeNow(),
        lastModified: time.timeNow()
    })

    let tags = ((req.body.tags != undefined && req.body.tags != null && req.body.tags!='')?req.body.tags.split(','):[]);
    newBlog.tags = tags;

    newBlog.save((err, result) =>{
        if(err){
            logger.error(err.message, "blog Controller : create", 9);
            let apiResponse = response.generate(true, "error creating the blog", 500, err)
            res.send(apiResponse);
        }else{
            let apiResponse = response.generate(false, "blog created successfully", 200, result)
            res.send(apiResponse);
        }
    })
}

// delete blog by Id

let deleteBlog = (req, res) =>{
    BlogModel.deleteOne({'blogId':req.params.blogId}, (err, result)=>{
        if(err){
            logger.error(err.message, "blogController : delete blog by blog Id")
            let apiResponse = response.generate(true, "error deleting the blog", 500, err)
            res.send(apiResponse);
        }else if(validCheck.isEmpty(result) || result.n === 0){
            logger.info("No blog found", "blogController: delete blog")
            let apiResponse = response.generate(true, "no blog of given blogId found in the database to delete", 404, "no blog of given blogId found to delete")
            res.send(apiResponse);
        }else{
            let apiResponse = response.generate(false, "blog deleted successfully", 200, result)
            res.send(apiResponse);
        }
    })
}


// edit blog
let edit = (req, res) =>{
    let options = req.body;
    BlogModel.update({'blogId':req.params.blogId}, options, {multi: true})
    .exec((err, result) =>{
        if(err){
            logger.error(err.message, "blogController : edit blog by Id", 7);
            let apiResponse = response.generate(true, "error editing the blog", 500, err)
            res.send(apiResponse);
        }else if(validCheck.isEmpty(result) || result.n === 0){
            logger.info("No blog found", "blogController: edit blog by blog Id")
            let apiResponse = response.generate(true, "no blog of given blogId found in the database to edit", 404, "no blog of given blogId found to edit")
            res.send(apiResponse);
        }else{
            let apiResponse = response.generate(false, `blog edited successfully: ${result.nModified} fields edited`, 200, result)
            res.send(apiResponse);
        }
    })
}

// get blog by blogId
let getBlogByBlogId = (req, res) =>{
    console.log(req.user);
    BlogModel.findOne({'blogId':req.params.blogId}, (err,result)=>{
        if(err){
            logger.error(err.message, "blogController : get blog by blog Id", 6);
            let apiResponse = response.generate(true, "error occured in getting the blog", 500, err)
            res.send(apiResponse);
        }else if(validCheck.isEmpty(result)){
            logger.info("No blog found", "blogController: get blog by blog id")
            let apiResponse = response.generate(true, "no blog of given blogId found in the database", 404, "no blog of given blogId found")
            res.send(apiResponse);
        }else{
            let apiResponse = response.generate(false, "blogs requested successfully", 200, result)
            res.send(apiResponse);
        }
    }
    )
    
}

// get all blogs 

let getAllBlogs = (req, res) =>{
    BlogModel.find()
    .select('-__v -__id')
    .lean()
    .exec((err, result)=>{
        if(err){
            logger.error(err.message, "blogController : get all blog", 6);
            let apiResponse = response.generate(true, "error occured in getting the blog", 500, err)
            res.send(apiResponse);
        }else if(validCheck.isEmpty(result)){
            logger.info("No blog found", "blogController: get all blogs")
            let apiResponse = response.generate(true, "no blog found", 404, "no blog  found")
            res.send(apiResponse);
        }else {
            let apiResponse = response.generate(false, "blog requested successfully", 200, result)
            res.send(apiResponse);
        }
    })
}

//get blogs by author 

let getBlogByAuthor = (req, res) =>{
    BlogModel.findOne({'author':req.params.author}, (err, result)=>{
        if(err){
            logger.error(err.message, "blogController : get blog by author", 6);
            let apiResponse = response.generate(true, "error occured in getting the blog", 500, err)
            res.send(apiResponse);
        }else if(validCheck.isEmpty(result)){
            logger.info("No blog found", "blogController: get blog by author")
            let apiResponse = response.generate(true, "no blog of given author found", 404, "no blog of given author found")
            res.send(apiResponse);
        }else{
            let apiResponse = response.generate(false, "blog requested successfully", 200, result)
            res.send(apiResponse);
        }
    })
}

let getBlogByCat = (req, res) =>{
    BlogModel.findOne({'category':req.params.category}, (err, result)=>{
        if(err){
            logger.error(err.message, "blogController : get blog by category", 6);
            let apiResponse = response.generate(true, "error occured in getting the blog", 500, err)
            res.send(apiResponse);
        }else if(validCheck.isEmpty(result)){
            logger.info("No blog found", "blogController: get blog by category")
            let apiResponse = response.generate(true, "no blog of given category found", 404, "no blog of given category found")
            res.send(apiResponse);
        }else {
            let apiResponse = response.generate(false, "blog requested successfully", 200, result)
            res.send(apiResponse);
        }
    })
}

// increase view count by one

let increaseViewCount = (req, res) =>{
    BlogModel.findOne({'blogId':req.params.blogId}, (err, result)=>{
        if(err){
            logger.error(err.message, "blogController : increase blog view count", 6);
            let apiResponse = response.generate(true, "error occured in getting the blog", 500, err)
            res.send(apiResponse);
        }else if(validCheck.isEmpty(result)){
            logger.info("No blog found", "blogController: increase blog view count")
            let apiResponse = response.generate(true, "no blog of given blogId found in the database", 404, "no blog of given blogId found")
            res.send(apiResponse);
        }else {
            result.views += 1;
            result.save((err, result)=>{
                if(err){
                    logger.error(err.message, "blogController : get blog by blog Id - while increasing the count", 6);
                    let apiResponse = response.generate(true, "error occured in increasing the blog count", 500, err)
                    res.send(apiResponse);
                }else{
                    let apiResponse = response.generate(false, "blog updated successfully", 200, result)
                    res.send(apiResponse);
                }
            }
        )}
    })
}




module.exports = {
    create : create,
    deleteBlog: deleteBlog,
    edit : edit,
    getBlogByBlogId : getBlogByBlogId,
    getAllBlogs : getAllBlogs,
    getBlogByAuthor : getBlogByAuthor,
    getBlogByCat : getBlogByCat,
    increaseViewCount : increaseViewCount
}