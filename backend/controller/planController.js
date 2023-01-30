const planModel = require('../models/planModel');

const plans = async (req,res)=>{
    let plan = req.body;

    try{

        const data = await planModel.create(plan);
        if(data){
            res.json({
                message:'Plan added'
            })
        }else{
            res.json({
                message:"Coudn't add data"
            })
        }

    }catch(err){
        res.json({
            message:err.message
        })
    }

}

module.exports={plans};