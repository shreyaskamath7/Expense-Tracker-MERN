import React,{createContext,useReducer} from 'react'
import {AppReducer} from './AppReducer'
import axios from 'axios';
const initialstate={
    transactions:[
          
        ],
        loading:true,
        error:null

    
}

//create a contextsrc\context\AppReducer.js
export const GlobalContext=createContext(initialstate);

//create provider

export const GlobalProvider=({children})=>{
const [state,dispath]=useReducer(AppReducer,initialstate);
//Action
const getTransaction=async (id)=>{
    try {
        const res=await axios.get('api/v1/transaction');
        dispath({type:'GET_TRANSACTION',payload:res.data.data});
        
    } catch (err) {
        dispath({type:'TRANSACTION_ERROR',payload:err.response.data.error});
    }
    
    
    
    
}
const deletetransaction=async (id)=>{
    try {
        await axios.delete(`/api/v1/transaction/${id}`)
        dispath({type:'DELETE_TRANSACTION',payload:id});
    } catch (err) {
        dispath({type:'TRANSACTION_ERROR',payload:err.response.data.error});
    }
    
}
const addtransaction=async (transaction)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    try {
        const res=await axios.post('https://expensetrackeru.herokuapp.com/api/v1/transaction',transaction,config);
        dispath({type:'ADD_TRANSACTION',payload:res.data.data});
        
    } catch (err) {
        dispath({type:'TRANSACTION_ERROR',payload:err.response.data.error});
    }
    
    
}
return( <GlobalContext.Provider value={{transactions:state.transactions,deletetransaction,addtransaction,getTransaction,loading:state.loading,error:state.error}}>
    {children}
</GlobalContext.Provider>);
}