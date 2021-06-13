import React,{useContext,useState,useEffect} from 'react'
import '../css/transactionlist.css'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
    const {loading,transactions,getTransaction}=useContext(GlobalContext);
    const [show,setShow]=useState('false');
    console.log(show)
    useEffect(() => {
        getTransaction();
        
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    //console.log(transactions)
    return (
        
        <>
        
        <div className="history-header"><h3>History</h3>
        <button href="#" className="drop-down" onClick={()=>setShow(show=>!show)} >{show?(<i className='fas fa-window-close' />) :(<i className='fas fa-caret-down' />) }</button>
        
        </div>
        
        
      <ul  className={show?"list":"list-hide" }>
          {loading?<h2>Loading.......</h2>:transactions.map(transaction=>(
             <Transaction text={transaction.text} key={transaction._id} transaction={transaction}/>
          ))}
         
      </ul>
            
      </>
          
          
    )
}

export default TransactionList
