const userModel =  require('../models/userModel');

const adminCheckMiddleware = async (req,res,next) =>{

let id = req.id;
try{
    const user = await userModel.findById(id);
    if(user['role'] == 'admin'){
        next();
    }
    else{
        res.json({
            message:'admin access only'
        })
    }
}catch(err){
    res.json({
        message:err.message
    })
}


}

module.exports = adminCheckMiddleware;