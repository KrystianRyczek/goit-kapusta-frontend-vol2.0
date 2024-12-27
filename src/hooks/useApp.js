import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { selectIsLoading} from '../redux/storeSlice';
import { readDataFromLocalStorage,  saveDataToLocalStorage} from '../redux/storeSlice'
import { initialState } from '../redux/initialState';

export const useApp=()=>{
  const dispach = useDispatch()
  const isLoading = useSelector(selectIsLoading)

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


    return {useReadLocalStorage, useSaveLocalStorage }
}

