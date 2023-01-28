const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const db_link = "mongodb+srv://admin:9DcRgaJANlE81zvl@cluster0.bhvdu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_link)
.then((db)=>{console.log("Database Connected ...")})
.catch((err)=>{console.log("Error Connecting ...")});
