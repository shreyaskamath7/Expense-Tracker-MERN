const express=require("express")
const colors=require("colors")
const dotenv=require("dotenv")
const morgan=require("morgan")
const path = require('path')
const transaction=require("./routes/transaction")
const connectionDB=require('./config/db')
const cors = require('cors')
const app=express()

app.use(cors())
dotenv.config({path:'./config/config.env'})
app.use(express.json())
connectionDB();

app.use(morgan('tiny'));

app.use('/api/v1/transaction',transaction)
if(process.env.NODE_ENV=="production")
{

    app.use(express.static(path.join(__dirname, '../build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'))
    })
}


const PORT=process.env.PORT||5000

app.listen(PORT,
    console.log(`in ${process.env.NODE_ENV} mode listening to ${PORT} number `.yellow.bold))