import * as Yup from 'yup';
import { useDispatch } from "react-redux"
import { signInUser } from "../redux/auth/operation"
import { useNavigate } from "react-router";

export const useSignIn=()=>{
  const dispach = useDispatch()
  const navigate = useNavigate()

  const signIn=(user)=>{
    dispach(signInUser(user))
  }
  const clickSignUp=(e)=>{
    navigate("/register", {replace: true})
    e.preventDefault()
    console.log("clickSignUp")
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