import { useDispatch, useSelector } from "react-redux"
import {selectIncomes, selectExpenses} from '../redux/storeSlice';

export const useTransactionTable=()=>{
    const incomes = useSelector(selectIncomes)
    const expense = useSelector(selectExpenses)
    
    const transactionTableData= (activeSheet) =>{
        if(activeSheet ==="expenses"){
            return expense
        }
    return incomes
    }

    return { transactionTableData }
}