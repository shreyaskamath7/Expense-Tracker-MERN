const mongoose=require("mongoose")

const TransationSchema=new mongoose.Schema({

type:{
    type:String,
    trim:true,
    required:[true,"Please select Transaction Typre"]
},
text:{
    type:String,
    trim:true,
    required:[true,"Plsease Enetr the Text"]
},
amount:{
    type:Number,
    trim:true,
    required:[true,"Plsease Enetr the amount"]
},
created:{
    type:Date,
    default:Date.now()
}

})

module.exports=mongoose.model("Transaction",TransationSchema);