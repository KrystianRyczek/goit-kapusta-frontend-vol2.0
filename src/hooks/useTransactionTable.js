import { useDispatch, useSelector } from "react-redux"
import { selectIncomes, selectExpenses, selectToken } from '../redux/storeSlice';
import { useEffect, useState } from "react";
import { deleteUserExpense, getUserIncome, getUserExpense, updateBalance } from "../redux/transaction/operation";
import { useBalance } from "./useBalance";

export const useTransactionTable = (activeSheet) => {
  const dispatch = useDispatch()
  const incomes = useSelector(selectIncomes);
  const expenses = useSelector(selectExpenses);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transDesc, setTransDesc] = useState(null);
  const [activeData, setActiveData] = useState([]);
  const token = useSelector(selectToken)
  const [submit, setSubmit] = useState(false)
  const balance = useBalance()
  
  const transactionTableData = () => activeData;

  const deleteTransaction = (description) => {
    setModalIsOpen(true);
    setTransDesc(description);
  };

  const deleteConf = () => {
    setModalIsOpen(false);
    setSubmit(true);
    dispatch(deleteUserExpense({ transDesc, token })).then(() => {
      dispatch(updateBalance(balance)); // Aktualizacja balance po usunięciu
    });
  };

  const deleteModalClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (activeSheet === "expenses") {
      setActiveData(expenses);
    } else {
      setActiveData(incomes);
    }
  }, [expenses, incomes, activeSheet]);

  const useEffectGetTransaction = () => {
      useEffect(() => {
        console.log("useEffect")
        setSubmit(false)
        dispatch(getUserIncome(token));
        dispatch(getUserExpense(token));

      }, [submit]);
    }
  return {
    transactionTableData,
    useEffectGetTransaction,
    deleteTransaction,
    deleteConf,
    deleteModalClose,
    modalIsOpen,
  };
};