import React,{useContext} from 'react'
import '../css/incomeexpense.css'
import {GlobalContext} from '../context/GlobalState'
const IncomeExpense = () => {
  const {transactions}=useContext(GlobalContext);
    const Incomes=transactions.filter(transaction=>{
        return transaction.type==="deposit"
    })
    console.log(Incomes)
    const Income=Incomes.reduce((sum,amt)=>(sum+=amt.amount),0).toFixed(2)
    const Expenses=transactions.filter(transaction=>{
      return transaction.type==="expense"
  })
  console.log(Expenses)
  const Expense=Expenses.reduce((sum,amt)=>(sum+=amt.amount),0).toFixed(2)

  const Savings=transactions.filter(transaction=>{
    return transaction.type==="savings"
})
const Saving=Savings.reduce((sum,amt)=>(sum+=amt.amount),0).toFixed(2)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+₹{Income}</p>
        </div>
        <div >
          <h4>Expense</h4>
          <p  className="money minus">-₹{Expense}</p>
        </div>
        <div >
          <h4>Savings</h4>
          <p  className="money neutral">₹{Saving}</p>
        </div>
      </div>
    )
}

export default IncomeExpense
