const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../secure/secret_key');

const userCheckMiddleware =(req,res,next) =>{
    let token = req.cookies.isLoggedIn;//multiple cookies received 'isLoggedIn' is one of them
    if(token){
        let payloadObject = jwt.verify(token,SECRET_KEY);
        if(payloadObject){
            req.id = payloadObject.payload; //helps in passing parameter to next middleware
            next();
        }
        else{
            res.json({
                message:"Unautherise Access"
            })
        }
    }
    else{
        res.json({
            message:"Login Required"
        })
    }
}

module.exports = userCheckMiddleware;