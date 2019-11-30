define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/blogs/:blogId/delete",
    "title": "Delete blog",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authenticatino .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId passed as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"errorOccurred\": false,\n        \"message\": \"blog deleted successfully\",\n        \"status\": 200,\n        \"data\": {\n                \"n\": 1,\n                \"ok\": 1,\n                \"deletedCount\": 1\n                }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"error deleting the blog\",\n        \"status\": 500,\n        \"data\": \"error data\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "Delete",
    "name": "PostApiV1BlogsBlogidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/:blogId/edit",
    "title": "Edit blog",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId passed as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"errorOccurred\": false,\n        \"message\": \"blog edited successfully: 1 fields edited\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"no blog of given blogId found in the database to edit\",\n        \"status\": 404,\n        \"data\": \"no blog of given blogId found to edit\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "Edit",
    "name": "PutApiV1BlogsBlogidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/all",
    "title": "Read - Get All blogs",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"errorOccurred\": false,\n        \"message\": \"blogs requested successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"title\": String\n            \"description\": String,\n            \"bodyHtml\": String,\n            \"views\": Number,\n            \"isPublished\": Boolean,\n            \"category\": String,\n            \"author\": String,\n            \"tags\": [],\n            \"created\": date,\n            \"lastModified\": date,\n            \"blogId\": String,\n            },{\n            \"title\": String\n            \"description\": String,\n            \"bodyHtml\": String,\n            \"views\": Number,\n            \"isPublished\": Boolean,\n            \"category\": String,\n            \"author\": String,\n            \"tags\": [],\n            \"created\": date,\n            \"lastModified\": date,\n            \"blogId\": String,\n            },{\n            \"title\": String\n            \"description\": String,\n            \"bodyHtml\": String,\n            \"views\": Number,\n            \"isPublished\": Boolean,\n            \"category\": String,\n            \"author\": String,\n            \"tags\": [],\n            \"created\": date,\n            \"lastModified\": date,\n            \"blogId\": String,\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"no blogs found in the database \",\n        \"status\": 404,\n        \"data\": \"no blogs found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "Read",
    "name": "GetApiV1BlogsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/:blogId",
    "title": "Read - Get single blog",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId passed as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"errorOccurred\": false,\n        \"message\": \"blogs requested successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"title\": String\n            \"description\": String,\n            \"bodyHtml\": String,\n            \"views\": Number,\n            \"isPublished\": Boolean,\n            \"category\": String,\n            \"author\": String,\n            \"tags\": [],\n            \"created\": date,\n            \"lastModified\": date,\n            \"_id\": String,\n            \"blogId\": String,\n            \"__v\": \n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"no blog of given blogId found in the database \",\n        \"status\": 404,\n        \"data\": \"no blog of given blogId found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "Read",
    "name": "GetApiV1BlogsViewBlogid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/author/:autho",
    "title": "Read - Get blog by author",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>author passed as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"errorOccurred\": false,\n        \"message\": \"blogs requested successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"title\": String\n            \"description\": String,\n            \"bodyHtml\": String,\n            \"views\": Number,\n            \"isPublished\": Boolean,\n            \"category\": String,\n            \"author\": String,\n            \"tags\": [],\n            \"created\": date,\n            \"lastModified\": date,\n            \"_id\": String,\n            \"blogId\": String,\n            \"__v\": \n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"no blog of given author found in the database \",\n        \"status\": 404,\n        \"data\": \"no blog of given author found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "Read",
    "name": "GetApiV1BlogsViewByAuthorAutho"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/category/:category",
    "title": "Read - Get blog by category",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category passed as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"errorOccurred\": false,\n        \"message\": \"blogs requested successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"title\": String\n            \"description\": String,\n            \"bodyHtml\": String,\n            \"views\": Number,\n            \"isPublished\": Boolean,\n            \"category\": String,\n            \"author\": String,\n            \"tags\": [],\n            \"created\": date,\n            \"lastModified\": date,\n            \"_id\": String,\n            \"blogId\": String,\n            \"__v\": \n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"no blog of given category found in the database \",\n        \"status\": 404,\n        \"data\": \"no blog of given category found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "Read",
    "name": "GetApiV1BlogsViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/:autho",
    "title": "Update - Increase the blog view count",
    "version": "0.0.1",
    "group": "Update_Count",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId passed as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"errorOccurred\": false,\n            \"message\": \"blog updated successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": String,\n                \"description\": String,\n                \"bodyHtml\": String,\n                \"views\": 4,\n                \"isPublished\": Boolean,\n                \"category\": String,\n                \"author\": String,\n                \"tags\": [],\n                \"created\": Date,\n                \"lastModified\": Date,\n                \"_id\": String,\n                \"blogId\": String,\n                \"__v\":\n            }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"no blog of given blogId found in the database \",\n        \"status\": 404,\n        \"data\": \"no blog of given blogId found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "Update_Count",
    "name": "GetApiV1BlogsAutho"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/create",
    "title": "Create blog",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for authenticatino .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogBody",
            "description": "<p>blogBody of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as a body paramter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"errorOccurred\": false,\n            \"message\": \"blog created successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": string,\n                \"description\": String,\n                \"bodyHtml\": String,\n                \"views\": null,\n                \"isPublished\": true,\n                \"category\": String,\n                \"author\": String,\n                \"tags\": [],\n                \"created\": Date,\n                \"lastModified\": Date,\n                \"blogId\": \"ekfio5rY\",\n            }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error- Response:",
          "content": "{\n\"errorOccurred\": true,\n        \"message\": \"blog create error\",\n        \"status\": 500,\n        \"data\": \"error data\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "route/blog.js",
    "groupTitle": "create",
    "name": "PostApiV1BlogsCreate"
  }
] });
