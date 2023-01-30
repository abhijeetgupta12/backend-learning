const nodemailer = require('nodemailer'); //npm i nodemailer
const {MAIL,MAIL_PASS} = require('./secret_key')

const sendMail = async (str,data)=>{
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        host:"smtp.google.com",
        port:587,
        secure:false,
        auth:{
            user:MAIL,
            pass:MAIL_PASS
        }
    });

    var Msubject,Mbody;
    if(str=="signup"){
        Msubject=`Thank you for signing up with us ${data.name}`;
        Mbody=`
        <h1>Welcome to my project</h1>
        Hope you have a good time !
        You Signed up as - <br>
        Name - ${data.name} <br>
        Email - ${data.email}`;

    }else if(str=='resetpassword'){
        Msubject=`Reset Password`,
        Mbody=`Kidly click the below link to reset your password
        ${data.resetpasswordLink}`
    }

    console.log(str,data);

    try{

        let info = await transporter.sendMail({
            from: '"Abhijeet 👻" <abhijeet.gpta12@gmail.com>', // sender address
            to: data.email, // list of receivers
            subject: Msubject, // Subject line
            html: Mbody, // html body
          });
         
        console.log('Mail Sent',info);
    }catch(err){
        console.log(err.message);
    }
    
}


module.exports={sendMail};