import { useSelector } from "react-redux"
import { selectIncomes, selectExpenses } from '../redux/storeSlice';
import { useEffect, useState } from "react";

export const useTransactionTable = (activeSheet) => {
  const incomes = useSelector(selectIncomes);
  const expenses = useSelector(selectExpenses);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transDesc, setTransDesc] = useState(null);
  const [activeData, setActiveData] = useState([]);

  const transactionTableData = () => activeData;

  const deleteTransaction = (description) => {
    setModalIsOpen(true);
    setTransDesc(description);
  };

  const deleteConf = () => {
    setModalIsOpen(false);
    console.log("Deleting transaction:", transDesc);
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