import { useSelector } from "react-redux"
import {selectIncomesStat,  selectExpenseStat} from '../redux/storeSlice';



export const useTransactionSummary = () => {



    
    const incomesStat = useSelector(selectIncomesStat);
    const expenseStat = useSelector(selectExpenseStat);

    const summaryTableData = (activeSheet) => {
        const data = activeSheet === "expenses" ? expenseStat : incomesStat;
        if (data && typeof data === "object") {
            return Object.entries(data).map(([month, value]) => ({
                month,
                value,
            }));
        }
        return [];
    };
    return { summaryTableData }
};