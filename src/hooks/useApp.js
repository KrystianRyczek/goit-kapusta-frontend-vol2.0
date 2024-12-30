import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { selectIsLoading } from '../redux/storeSlice';
import { saveDataToLocalStorage } from '../redux/storeSlice'


export const useApp=()=>{
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  const useSaveLocalStorage = ()=>{
    useEffect(() => {
      dispatch(saveDataToLocalStorage());
        }, [isLoading]);
  }

    return { useSaveLocalStorage }
}

