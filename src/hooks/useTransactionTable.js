import { useDispatch, useSelector } from "react-redux"
import { selectIncomes, selectExpenses, selectToken } from '../redux/storeSlice';
import { useEffect, useState } from "react";
import { deleteUserExpense } from "../redux/transaction/operation";

export const useTransactionTable = (activeSheet) => {
  const dispatch = useDispatch()
  const incomes = useSelector(selectIncomes);
  const expenses = useSelector(selectExpenses);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transDesc, setTransDesc] = useState(null);
  const [activeData, setActiveData] = useState([]);
  const token = useSelector(selectToken)

  const transactionTableData = () => activeData;

  const deleteTransaction = (description) => {
    setModalIsOpen(true);
    setTransDesc(description);
  };

  const deleteConf = () => {
    setModalIsOpen(false);
    dispatch(deleteUserExpense({ transDesc, token }))
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

  return {
    transactionTableData,
    deleteTransaction,
    deleteConf,
    deleteModalClose,
    modalIsOpen,
  };
};