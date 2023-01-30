const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'plan name required'],
        maxLength:[20,'plan name should not exceed 20 char']
    },
    duration:{
        type:Number,
        required:[true,'duration required'],
    },
    price:{
        type:Number,
        required:[true,'cost required'],
    },
    discount:{
        type:Number,
        validate:[function(){
            return this.discount<100
        },'dicount cannot exceed price']
    },
    ratingAverage:{
        type:Number,
        required:[true,'rating required']
    }
})

const planModel = mongoose.model('planModel',planSchema)
module.exports = planModel;