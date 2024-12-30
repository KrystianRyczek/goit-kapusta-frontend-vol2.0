import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { selectBalance, selectIsLoading, selectToken} from '../redux/storeSlice';
import { readDataFromLocalStorage,  saveDataToLocalStorage} from '../redux/storeSlice'
import { initialState } from '../redux/initialState';
import { getUserExpense, getUserIncome } from "../redux/transaction/operation";

export const useApp=()=>{
  const dispach = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const token = useSelector(selectToken)
  const balance = useSelector(selectBalance)

  const useReadLocalStorage = ()=>{
    useEffect(() => {
      const userLocaldata = window.localStorage.getItem('userLocaldata');
      if (userLocaldata !== null) {
        dispach(readDataFromLocalStorage());
      }
        }, []);
  }
  const useSaveLocalStorage = ()=>{
    useEffect(() => {
        dispach(saveDataToLocalStorage());
        }, [isLoading]);
  }

  const useTransactionData = () => {
    useEffect(() => {
      dispach(getUserIncome(token));
      dispach(getUserExpense(token));
    }, [balance]);
  }


    return {useReadLocalStorage, useSaveLocalStorage, useTransactionData }
}

