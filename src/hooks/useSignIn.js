import * as Yup from 'yup';
import { useDispatch } from "react-redux"
import { signInUser } from "../redux/auth/operation"
import { useNavigate } from "react-router";
import { selectIsLogin, selectLightTheme } from '../redux/storeSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
export const useSignIn=()=>{
  const dispach = useDispatch()
  const navigate = useNavigate()

  const signIn=(user)=>{
    dispach(signInUser(user))
    
  }
  const clickSignUp=(e)=>{
    navigate("/register", {replace: true})
    e.preventDefault()
  }
  const SignInShema = Yup.object().shape({
    email: Yup.string()
               .min(2,"Name is too short")
               .max(20,"Name is too long")
               .required('Login is required'),
               password:  Yup.string()
               .min(2,"Name is too short")
               .required('Password is required'),
  })
    
  return {SignInShema, signIn, clickSignUp}
}