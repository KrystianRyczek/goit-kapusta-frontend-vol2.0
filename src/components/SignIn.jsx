import '../css/SignIn.css'
import {Field, Form, Formik, ErrorMessage} from "formik";
import {useSignIn} from '../hooks/useSignIn'

export default function SignIn() {
    const {SignInShema, signIn, clickSignUp} = useSignIn()
    return (
        <div className='login-form-container'>

            <div className="login-box">
                <p className='login-form-p1'>You can log in with your Google Account:</p>
                <button className='login-form-auth-btn'>Google</button>
                <p className='login-form-p2'>Or log in using an email and password,after registering:</p>
                <Formik 
                 validationSchema={SignInShema}
                 initialValues={{email:"", password:""}} 
                 onSubmit={
                    (values, actions)=>{
                     signIn(values)
                     actions.resetForm()
                    }}>
                    <Form>
                      <div className="login-input-box">
                        <label htmlFor="email">*Email Address</label>
                        <Field className="login-input" type="email" name="email" placeholder="E-mail"/>
                        <div className="error-msg">
                          <ErrorMessage name="email" as='div' />
                        </div>
                      </div>
                      <div className="login-input-box">
                        <label htmlFor="email">*Password</label>
                        <Field className="login-input" type="password" name="password" placeholder="Password"/>
                        <div className="error-msg">
                          <ErrorMessage name="password" as='div'/>
                        </div>
                      </div>
                     <div className='sign-in-form-btn-box'>
                      <button type="submit" className="isActive">Sign In</button>
                      <button type="submit" className="isInActive" onClick={event=>{clickSignUp(event)}}>Sign Up</button>
                     </div>
                    </Form>
                </Formik>
             </div>
   </div>
   );}