import { useDispatch, useSelector } from "react-redux"
import {selectIncomes, selectExpenses, selectToken} from '../redux/storeSlice';
import { useState } from "react";

export const useTransactionTable=()=>{
    const incomes = useSelector(selectIncomes)
    const expense = useSelector(selectExpenses)
    const [modalIsOpen, setModalIsOpen]=useState(false)
    const [transDesc, setTransDesc]=useState(null)

    const transactionTableData= (activeSheet) =>{
        if(activeSheet ==="expenses"){
            return expense
        }
    return incomes
    }
  const deleteTransaction =(description)=>{
    setModalIsOpen(true)
    setTransDesc(description)
  }
  const deleteConf=()=>{
    setModalIsOpen(false)
    console.log(transDesc)

  }
  const deleteModalClose = () =>{
    setModalIsOpen(false)
  }
    return { transactionTableData, deleteTransaction, deleteConf, deleteModalClose , modalIsOpen}
}