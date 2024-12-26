import { useDispatch, useSelector } from "react-redux"
import {selectIncomesStat,  selectExpenseStat} from '../redux/storeSlice';



export const useTransactionSummary=()=>{
    const incomesStat = useSelector(selectIncomesStat)
    const expenseStat = useSelector(selectExpenseStat)

    const summaryTableData= (activeSheet) =>{
        if(activeSheet ==="expenses"){
            return expenseStat
        }
    return incomesStat
    } 

    return { summaryTableData,  }
}