// const {userModel} =  require('../models/userModel');
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = require('../secure/secret_key');

// const homePage = (req,res)=>{
//     res.sendFile('/public/index.html',{root:__dirname})
// }

// const getUsers = async (req,res)=>{
//     try{
//         const data = await userModel.find();
//         res.json({message:"Data Found",data:data});

//     }catch(err){
//         res.json({message:"Data not Found",error:err})
//     }

// }

// const postUser = async (req,res)=>{
//     try{
//         console.log(req.body);
//         const data = await userModel.create(req.body);
//         res.json({message:"Data Added", data:data});

//     }catch(err){
//         res.json({message:"Data not added", error:err});
//     }
    
// }

// const updateUser = async (req,res)=>{

//     try{
//         const valFind = req.body.valueField;
//         const valUpdate = req.body.valueUpdate;

//         const data = await userModel.findOneAndUpdate({email:valFind},{name:valUpdate});
//         //data returns old data
//         res.json({message:"Data Updated",data:data});

//     }catch(err){
//         res.json({message:"Data not Updated",error:err});
//     }
    
// }

// const deleteUser =async (req,res)=>{
//     try{
//             const data =await userModel.deleteMany({}); 
//             //deleting all -- data returns count of documents deleted
//             res.json({message:"Data Deleted",data:data});

//     }catch(err){
//             res.json({message:"Data not deleted",error:err });
//     }
// }

// const getUserById = (req,res)=>{
//     console.log(req.params);
//     let id = req.params.id;

//     for(key of users){
//         console.log(key);
//         if(key.id == id){
//             res.send(key.name);
//             break;
//         }
//       }

// }

// const setCookie = (req,res)=>{
//     res.cookie('isLoggedIn',true,{maxAge:1000*60*5, secure:true , httpOnly:true});
//     res.cookie('isPrimeMember',true);
//     res.send("cookie has been set");
// }

// const getCookie = (req,res)=>{
//     const cookie = req.cookies;
//     console.log(cookie);
//     res.send('cookies receieved')

// }

// const loginUser = async (req,res)=>{
//     let data=req.body;
//     if(data.email && data.password){
//         try{
//             let user = await userModel.findOne({email:data.email});
//             if(user){
//                 if(data.password == user.password){

//                     let uid=user['_id'];//payload
//                     let token = jwt.sign({payload:uid},SECRET_KEY);//signature (payload+secretKey+header)

//                     res.cookie('isLoggedIn',token,{httpOnly:true});
//                     //single cookie created by server and sent to browser
//                     //we should not just send a plain text in cookie send some complex data in form of jwt token
//                     //httpOnly:true won't allow any user to view our cookies directly 
//                     res.json({
//                         message:"user logged in",
//                         data:user
//                     })
//                 }else{
//                     res.json({
//                         message:"wrong credentials"
//                     })
//                 }
//             }
//             else{
//                 res.json({
//                     message:"email not found"
//                 })
//             }
            
//         }catch(err){
//             res.json({message:err.message});
//         }
//         let user = await userModel.findOne({email:data.email});
//     }else{
//         res.json({
//             message:"Empty field found"
//         })
//     }

// }


// module.exports={homePage,getUsers,postUser,updateUser,
//     deleteUser,getUserById,setCookie,getCookie,loginUser};


