const express = require('express');

const middleware = require('./../middlewares/blogMiddleware')

const controller = require('./../controllers/blogController')

const auth = require('./../middlewares/auth');

let setRouter = (app) =>{
    
    let baseUrl = "/api/v1";
    app.post(baseUrl+'/blogs/create', auth.isAuthenticated, controller.create);

    /**
     * @api {post} /api/v1/blogs/create Create blog
     * @apiVersion 0.0.1
     * @apiGroup create
     * 
     * @apiParam {String} authToken the token for authenticatino .
     * @apiParam {String} title title of the blog passed as a body parameter
     * @apiParam {String} description description of the blog passed as a body parameter
     * @apiParam {String} blogBody blogBody of the blog passed as a body parameter
     * @apiParam {String} category category of the blog passed as a body paramter
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
            "errorOccurred": false,
            "message": "blog created successfully",
            "status": 200,
            "data": {
                "title": string,
                "description": String,
                "bodyHtml": String,
                "views": null,
                "isPublished": true,
                "category": String,
                "author": String,
                "tags": [],
                "created": Date,
                "lastModified": Date,
                "blogId": "ekfio5rY",
            }
     *  }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "blog create error",
        "status": 500,
        "data": "error data"
     * }
     *  
     */


    app.post(baseUrl+'/blogs/:blogId/delete', auth.isAuthenticated, controller.deleteBlog);

    /**
     * @api {post} /api/v1/blogs/:blogId/delete Delete blog
     * @apiVersion 0.0.1
     * @apiGroup Delete
     * 
     * @apiParam {String} authToken the token for authenticatino .
     * @apiParam {String} blogId blogId passed as a query parameter 
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
        "errorOccurred": false,
        "message": "blog deleted successfully",
        "status": 200,
        "data": {
                "n": 1,
                "ok": 1,
                "deletedCount": 1
                }
     *  }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "error deleting the blog",
        "status": 500,
        "data": "error data"
     * }
     *  
     */


    app.put(baseUrl+'/blogs/:blogId/edit', auth.isAuthenticated, controller.edit);


    /**
     * @api {put} /api/v1/blogs/:blogId/edit Edit blog
     * @apiVersion 0.0.1
     * @apiGroup Edit
     * 
     * @apiParam {String} authToken the token for authentication.
     * @apiParam {String} blogId blogId passed as a query parameter 
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
        "errorOccurred": false,
        "message": "blog edited successfully: 1 fields edited",
        "status": 200,
        "data": {
            "n": 1,
            "nModified": 1,
            "ok": 1
            }
     * }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "no blog of given blogId found in the database to edit",
        "status": 404,
        "data": "no blog of given blogId found to edit"
     * }
     *  
     */


    app.get(baseUrl+'/blogs/view/:blogId', auth.isAuthenticated, controller.getBlogByBlogId);

     /**
     * @api {get} /api/v1/blogs/view/:blogId Read - Get single blog
     * @apiVersion 0.0.1
     * @apiGroup Read
     * 
     * @apiParam {String} authToken the token for authentication.
     * @apiParam {String} blogId blogId passed as a query parameter 
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
        "errorOccurred": false,
        "message": "blogs requested successfully",
        "status": 200,
        "data": {
            "title": String
            "description": String,
            "bodyHtml": String,
            "views": Number,
            "isPublished": Boolean,
            "category": String,
            "author": String,
            "tags": [],
            "created": date,
            "lastModified": date,
            "_id": String,
            "blogId": String,
            "__v": 
            }
     * }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "no blog of given blogId found in the database ",
        "status": 404,
        "data": "no blog of given blogId found"
     * }
     */

    app.get(baseUrl+'/blogs/all', auth.isAuthenticated, controller.getAllBlogs);

     /**
     * @api {get} /api/v1/blogs/all Read - Get All blogs
     * @apiVersion 0.0.1
     * @apiGroup Read
     * 
     * @apiParam {String} authToken the token for authentication.
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
        "errorOccurred": false,
        "message": "blogs requested successfully",
        "status": 200,
        "data": {
            "title": String
            "description": String,
            "bodyHtml": String,
            "views": Number,
            "isPublished": Boolean,
            "category": String,
            "author": String,
            "tags": [],
            "created": date,
            "lastModified": date,
            "blogId": String,
            },{
            "title": String
            "description": String,
            "bodyHtml": String,
            "views": Number,
            "isPublished": Boolean,
            "category": String,
            "author": String,
            "tags": [],
            "created": date,
            "lastModified": date,
            "blogId": String,
            },{
            "title": String
            "description": String,
            "bodyHtml": String,
            "views": Number,
            "isPublished": Boolean,
            "category": String,
            "author": String,
            "tags": [],
            "created": date,
            "lastModified": date,
            "blogId": String,
            }
     * }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "no blogs found in the database ",
        "status": 404,
        "data": "no blogs found"
     * }
     */


    app.get(baseUrl+'/blogs/view/by/author/:author', auth.isAuthenticated, controller.getBlogByAuthor);

    /**
     * @api {get} /api/v1/blogs/view/by/author/:autho Read - Get blog by author
     * @apiVersion 0.0.1
     * @apiGroup Read
     * 
     * @apiParam {String} authToken the token for authentication.
     * @apiParam {String} author author passed as a query parameter 
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
        "errorOccurred": false,
        "message": "blogs requested successfully",
        "status": 200,
        "data": {
            "title": String
            "description": String,
            "bodyHtml": String,
            "views": Number,
            "isPublished": Boolean,
            "category": String,
            "author": String,
            "tags": [],
            "created": date,
            "lastModified": date,
            "_id": String,
            "blogId": String,
            "__v": 
            }
     * }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "no blog of given author found in the database ",
        "status": 404,
        "data": "no blog of given author found"
     * }
     */

    app.get(baseUrl+'/blogs/view/by/category/:category', auth.isAuthenticated, controller.getBlogByCat);


    /**
     * @api {get} /api/v1/blogs/view/by/category/:category Read - Get blog by category
     * @apiVersion 0.0.1
     * @apiGroup Read
     * 
     * @apiParam {String} authToken the token for authentication.
     * @apiParam {String} category category passed as a query parameter 
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
        "errorOccurred": false,
        "message": "blogs requested successfully",
        "status": 200,
        "data": {
            "title": String
            "description": String,
            "bodyHtml": String,
            "views": Number,
            "isPublished": Boolean,
            "category": String,
            "author": String,
            "tags": [],
            "created": date,
            "lastModified": date,
            "_id": String,
            "blogId": String,
            "__v": 
            }
     * }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "no blog of given category found in the database ",
        "status": 404,
        "data": "no blog of given category found"
     * }
     */

    app.get(baseUrl+'/blogs/:blogId/count/view', auth.isAuthenticated, controller.increaseViewCount);

    
    /**
     * @api {get} /api/v1/blogs/:autho Update - Increase the blog view count
     * @apiVersion 0.0.1
     * @apiGroup Update Count
     * 
     * @apiParam {String} authToken the token for authentication.
     * @apiParam {String} blogId blogId passed as a query parameter 
     * 
     *  @apiSuccessExample {json} Success-Response:
     * {
            "errorOccurred": false,
            "message": "blog updated successfully",
            "status": 200,
            "data": {
                "title": String,
                "description": String,
                "bodyHtml": String,
                "views": 4,
                "isPublished": Boolean,
                "category": String,
                "author": String,
                "tags": [],
                "created": Date,
                "lastModified": Date,
                "_id": String,
                "blogId": String,
                "__v":
            }
     *  }
     * 
     * @apiErrorExample {json} Error- Response:
     * {
     * "errorOccurred": true,
        "message": "no blog of given blogId found in the database ",
        "status": 404,
        "data": "no blog of given blogId found"
     * }
     */


};

module.exports = {
    setRouter:setRouter
}