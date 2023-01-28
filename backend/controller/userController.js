const userModel =  require('../models/userModel');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../secure/secret_key');



const userSignup = async (req,res)=>{
    try{
        const data = await userModel.create(req.body);
        if(data){
            res.json({message:"Data Added", data:data});
        }
        else{
            res.json({message:"Something went wrong!"});
        }
        

    }catch(err){
        res.json({message:"Data not added", error:err.message});
    }
    
}

const userLogin = async (req,res)=>{
    let data=req.body;
    if(data.email && data.password){
        try{
            let user = await userModel.findOne({email:data.email});
            if(user){
                if(data.password == user.password){

                    let uid=user['_id'];//payload
                    let token = jwt.sign({payload:uid},SECRET_KEY);//signature (payload+secretKey+header)

                    res.cookie('isLoggedIn',token,{httpOnly:true});
                    //single cookie created by server and sent to browser
                    //we should not just send a plain text in cookie send some complex data in form of jwt token
                    //httpOnly:true won't allow any user to view our cookies directly from browser
                    
                    res.json({
                        message:"user logged in",
                        data:user
                    })
                }else{
                    res.json({
                        message:"wrong credentials"
                    })
                }
            }
            else{
                res.json({
                    message:"email not found"
                })
            }
            
        }catch(err){
            res.json({message:err.message});
        }
    }else{
        res.json({
            message:"Empty field found"
        })
    }

}

const userUpdate = async (req,res)=>{

    try{
        let dataToBeUpdated = req.body;
        let id = req.id;
        const user = await userModel.findById(id);

        for (let key in dataToBeUpdated){
            user[key]=dataToBeUpdated[key];
        }

        const data = await userModel.findByIdAndUpdate(id,user);
        //data returns old data
        res.json({message:"Data Updated",data:data});

    }catch(err){
        res.json({message:"Data not Updated",error:err});
    }
    
}

const userProfile = async (req,res)=>{
    let id = req.id;
    try{
        const user =await userModel.findById(id);
        res.json({
            message:'Profile',
            data:user
        })
    }catch(err){
        res.json({
            message:err.message
        })
    }
    

}

const userAll = async (req,res) =>{
    try{
        const users = await userModel.find();
        if(users){
            res.json({
                message:'Data Retreived',
                data:users
            })
        }else{
            res.json({
                message:'No data to be displayed'
            })
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
    
}

const deleteAll = async (req,res)=>{
    try{

        const data = await userModel.deleteMany({});
        if(data){

            res.json({
                message:'Data deleted',
                data:data
            })

        }else{
            res.json({
                message:'No data found to be deleted'
            })
        }

    }catch(err){
        res.json({
            message:err.message
        })
    }
}


module.exports={userSignup,userLogin,userProfile,userUpdate,userAll,deleteAll};


