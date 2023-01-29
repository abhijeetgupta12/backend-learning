const express = require('express');
const userCheckMiddleware = require('./userCheckMiddleware');
const adminCheckMiddleware = require('./adminCheckMiddleware');
const {userSignup, userLogin, userProfile, userUpdate,
    userAll, deleteAll, forgotpassword, resetpassword, logout} = require('../controller/userController')




const userRouter = express.Router();

userRouter
.route('/signup')
.post(userSignup);

userRouter
.route('/login')
.post(userLogin);

userRouter
.route('/profile')
.get(userCheckMiddleware,userProfile);

userRouter
.route('/update')
.patch(userCheckMiddleware,userUpdate);

userRouter
.route('/forgotpassword')
.post(forgotpassword);

userRouter
.route('/resetpassword/:token')
.post(resetpassword);

userRouter
.route('/logout')
.get(logout)



userRouter
.route('/getAll')
.get(userCheckMiddleware,adminCheckMiddleware,userAll)

userRouter
.route('/deleteAll')
.delete(userCheckMiddleware,adminCheckMiddleware,deleteAll)



module.exports=userRouter;