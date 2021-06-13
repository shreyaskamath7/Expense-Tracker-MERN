import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {numberWithCommas} from '../utils/utils'
const Balance = () => {
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transaction=>{
        if(transaction.type==="expense") return -transaction.amount
        
        else if(transaction.type==="deposit") return transaction.amount
        
        else return -transaction.amount
    })
    const balance=amounts.reduce((sum,amt)=>(sum+=amt),0).toFixed(2)
    let sign=''
    if(balance>=0)
    {

    sign=''
    }
    else{
        sign="-"
    }
    console.log(amounts)
    
    return (
        <div>
            <h3>Your Balance</h3>
            <h1>{sign}₹{numberWithCommas(Math.abs(balance))}</h1>
           
        </div>
    )
}

export default Balance
