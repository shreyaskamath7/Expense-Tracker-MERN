import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
const Transaction = ({transaction}) => {
  const {deletetransaction}=useContext(GlobalContext)
    return (
      
        <>
        
        <li className={transaction.type==="expense"?"minus":transaction.type==="deposit"?"plus":"neutral"} >
        {transaction.text} <span>{transaction.type==="expense"?"-₹":"+₹"}{transaction.amount}</span><button className="delete-btn" onClick={()=>deletetransaction(transaction._id)}>x</button>
      </li>
        
      </>
    )
}

export default Transaction
