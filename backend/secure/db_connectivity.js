const mongoose = require('mongoose');
const db_link = require('./secret_key')

mongoose.set('strictQuery',false);
mongoose.connect(db_link)
.then((db)=>{console.log("Database Connected ...")})
.catch((err)=>{console.log("Error Connecting ...")});
