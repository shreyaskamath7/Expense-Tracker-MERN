const collection=require('../models/Transaction')

//@desc to get the trnsaction
//@route GET /api/v1/transaction
//@access public

exports.getTransactions= async (req,res,next)=>{
    try {
        const transactions=await collection.find()

        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        })
        
    } catch (error) {

        return res.status(500).json({
            success:fasle,
            error:"Server Error"
        })
        
    }
   
}

//@desc to add the trnsaction
//@route  POST /api/v1/transaction
//@access public

exports.addTransactions=async (req,res,next)=>{
    try {
        
    const {type,text,amount}=req.body;

    const transactions=await collection.create(req.body)
    return res.status(201).json({
        success:true,
        data:transactions
    })
        
    } catch (error) {
        if (error.name==="ValidationError"){
            const messages=Object.values(error.errors).map(err=>err.message)
            return res.status(400).json({
                success:false,
                error:messages
            })
        }
        else{
            console.log(error.name)
        }
        
        
    }
    

}

//@desc to delete the trnsaction
//@route POST /api/v1/transaction:id
//@access public

exports.deleteTransactions=async (req,res,next)=>{
    try {

        const transaction=await collection.findById(req.params.id);
        if(!transaction){
            return res.status(400).json({
                success:false,
                error:"no transaction found"
            })

        }
       await transaction.remove();
       return res.status(201).json({
        success:true,
        data:{}
    })

        
    } catch (error) {
        return res.status(500).json({
            success:fasle,
            error:"Server Error"
        })
        
    }
    

}