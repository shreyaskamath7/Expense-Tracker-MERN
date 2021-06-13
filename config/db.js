const mongoose=require('mongoose')

const connectionDB=async ()=>{
try {
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    })
    console.log(`connected to ${conn.connection.host}`.cyan.underline.bold)
    
} catch (error) {

    console.log(`Error:${error.message}`.red)
    
}
}

module.exports=connectionDB;