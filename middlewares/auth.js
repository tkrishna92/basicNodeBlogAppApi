const logger = require('./../libs/loggerlib');
const response = require('./../libs/response');

let isAuthenticated = (req, res, next) =>{
    
    if(req.params.authToken || req.query.authToken || req.header('authToken')){
        if(req.params.authToken === "Admin" || req.query.authToken === "Admin" || req.header("authToken") === "Admin"){
            req.user = {fullName : "Admin", userId : "Admin"};
            next();
        }else{
            logger.info("authentication token incorrect", req.method, 6);
            let apiResponse = response.generate(true, "Authentication token incorrect", 403, "please check the authentication token");
            res.send(apiResponse);
        }
    }else{
        logger.info("No authentication provided", req.method, 6);
        let apiResponse = response.generate(true, "Authentication token not provided", 403, "please provide an authentication token");
        res.send(apiResponse);
    }
}

module.exports = {
    isAuthenticated : isAuthenticated
}
