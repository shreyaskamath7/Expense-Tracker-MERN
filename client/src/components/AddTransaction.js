import React,{useContext,useState,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import '../css/addtransaction.css'

const AddTransaction = () => {
    const {addtransaction,error}=useContext(GlobalContext);
    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');
    const [type,setType]=useState('deposit')
    //const month= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    useEffect(() => {
        
        if (error){
            alert(error)

        }
    }, [error])
    const  handlesubmit=async(e)=>{
        e.preventDefault()
        const newtransaction={
            
            //d:Math.floor(Math.random()*1000),
            text,
            type,
            amount:parseInt(amount),
            
            
        }
         addtransaction(newtransaction)
        
    }
   

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={handlesubmit}> 
            <div className="htmlForm-control">
            <label htmlFor="type">Transaction type</label>
                <select  value={type} onChange={(e)=>setType(e.target.value)} required>
                    <option value="deposit"  >Deposit</option>
                    <option value="savings">Savings</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <div className="htmlForm-control">
            <label htmlFor="text">Text</label>
                <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="htmlForm-control">
            <label htmlFor="amount"
                >Amount 
            </label>
                <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn" >Add transaction</button>
        </form>
            
        </>
    )
}

export default AddTransaction;
