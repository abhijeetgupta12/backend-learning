const mongoose = require('mongoose');
const emailValidator = require('email-validator');

//Schema - defines the shape of the documents(rows) within that collection(Table).
const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    password:String,
    confirmPass:{
        type:String,
        validate:function(){
            return this.password == this.confirmPass;
        }
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    profilepic:{
        type:String,
        default:'img/default.jpeg'
    },
    resetToken:String
});

//before save events occur in db



userSchema.pre('save',async function(){
    console.log('before saving in database',this);
    this.confirmPass = undefined; 
    //we dont want to save confirmPass so before saving to db we clear it,
    //setting things to undefined wont allow it to save on db

    //hashing password
    // const bcrypt = require('bcrypt');
    // const salt = await bcrypt.genSalt();
    // const hashedString = await bcrypt.hash(this.password,salt);
    // this.password = hashedString;

});



//after save events occur in db

// userSchema.post('save',function(doc){
//     console.log('after saving in database',doc);
// })


//Naming of your collection(Table) in database and attatching the schema 

userSchema.method.createResetToken = function(){
    //we need to get a random 32 bit code 
    //use npm package crypto

    const resetToken = crypto.randomBytes(32).toString("hex");
    this.resetToken = resetToken;
    return resetToken;
}

userSchema.method.resetPasswordHandler = function(password,confirmPassword){
    this.password=password;
    this.confirmPass=confirmPassword;
    this.resetToken=undefined;
}

const userModel = new mongoose.model('userModel',userSchema);

module.exports = userModel;