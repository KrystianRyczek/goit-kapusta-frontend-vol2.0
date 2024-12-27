import { useDispatch, useSelector } from "react-redux"
import {selectIncomesCat, selectExpenseCat} from '../redux/storeSlice';
import { useState } from "react";

export const useTransactionAddForm=()=>{
    const incomesCategory = useSelector(selectIncomesCat)
    const expenseCategory = useSelector(selectExpenseCat)
    
    const category= (activeSheet) =>{
        if(activeSheet ==="expenses"){
            return expenseCategory
        }
    return incomesCategory
    } 
    return {category }
}