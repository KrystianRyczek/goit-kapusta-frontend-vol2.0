import * as Yup from 'yup';


export const useBalance=()=>{
  const balanceShema = Yup.object().shape({
    balance: Yup.number()
                .positive()
  })
    return {balanceShema}
}