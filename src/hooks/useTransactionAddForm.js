import { useDispatch, useSelector } from "react-redux"
import {selectIncomesCat, selectExpenseCat} from '../redux/storeSlice';
// import { useState } from "react";
import { userExpenseCategory, userIncomeCategory } from "../redux/transaction/operation";

export const useTransactionAddForm = () => {
    const dispatch = useDispatch();
    const incomesCategory = useSelector(selectIncomesCat)
    const expenseCategory = useSelector(selectExpenseCat)

    const fetchCategories = async (activeSheet) => {
  try {
    if (activeSheet === "expenses") {
      await dispatch(userExpenseCategory());
    } else if (activeSheet === "incomes") {
      await dispatch(userIncomeCategory());
    }
  } catch (error) {
    console.error("Błąd podczas pobierania kategorii:", error);
  }
};
    
    const category= (activeSheet) =>{
        if(activeSheet ==="expenses"){
            return expenseCategory || []
        }
    return incomesCategory || []
    } 
    return {category, fetchCategories }
}