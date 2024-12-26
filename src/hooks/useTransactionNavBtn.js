import { useNavigate } from "react-router";

export const useTransactionNavBtn=()=>{
    const navigate = useNavigate()

    const navigateOnClickExpens = (activeSheet)=>{
        if(activeSheet==="expenses"){
            return
        }
        console.log("change route path")
        return navigate('/transaction/expenses', {replace: true})
    }

    const navigateOnClickincomes = (activeSheet)=>{
        if(activeSheet==="incomes"){
            return
        }
        console.log("change route path")
        return navigate('/transaction/incomes', {replace: true})
    }

    return { navigateOnClickExpens, navigateOnClickincomes}
}