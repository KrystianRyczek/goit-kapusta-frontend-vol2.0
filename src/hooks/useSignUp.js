import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../redux/auth/operation"
import { useNavigate } from "react-router";
import {selectIsRegister} from '../redux/storeSlice';

export const useSignUp=()=>{

  const dispach = useDispatch()
  const navigate = useNavigate()
  const isRegister = useSelector(selectIsRegister)
  const clickSignIn=(e)=>{
    navigate("/", {replace: true})
    e.preventDefault()
  }
  const signUp=(values, actions)=>{
    const newUser = {
                     "username": values.username,
                     "email": values.email,
                     "password": values.password
                    }
    dispach(addUser(newUser))
    console.log(isRegister)
    if(isRegister){
      actions.resetForm()
      navigate("/", {replace: true})
    }
  }
  const ShemaSignUp = Yup.object().shape({
    username: Yup.string()
               .min(2,"Password is too short")
               .max(20,"Password is too long")
               .required('Login is required'),
    email: Yup.string()
               .email(),
    password:  Yup.string()
               .min(2,"Password is too short")
               .required('Password is required'),
    passwordConfirmation: Yup.string()
               .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })
       
  return {ShemaSignUp, clickSignIn, signUp}
}