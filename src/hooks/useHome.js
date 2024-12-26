import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/storeSlice';
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useHome=()=>{
    const navigate = useNavigate()
    const isLogin = useSelector(selectIsLogin)


    useEffect(() => {
      if(isLogin){
        navigate("/transaction/expenses", {replace: true})
      }
    }, [isLogin]);

    return {isLogin}
}