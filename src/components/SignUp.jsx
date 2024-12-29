import '../css/SignUp.css'
import {Field, Form, Formik, ErrorMessage} from "formik";
import {useSignUp} from '../hooks/useSignUp'

export default function SignUp() {

  const {ShemaSignUp, clickSignIn, signUp} = useSignUp()

    return (
            <div className="register-form-container">
                <div className="register-box">
                  <p className='register-form-p1'>Welcome</p>
                  <p className='register-form-p2'>Please, complete the registration form:</p>
                  <Formik
                    name="signUp"
                    validationSchema={ShemaSignUp}
                    initialValues={{username:"", email:"", password:"", passwordConfirmation:""}} 
                    onSubmit={
                      (values, actions)=>{
                      signUp(values, actions)
                      
                      }}>
                    <Form className="register-user-form" name="signUp">
                      <div className="register-input-box">
                        <label htmlFor="username">*Name</label>
                        <Field className="register-input" type="text" name="username" placeholder="Name"/>
                        <div className='error-msg'>
                          <ErrorMessage name="username" as='div'/>
                        </div>
                      </div>
                      <div className="register-input-box">
                        <label htmlFor="email">*Email Address</label>
                        <Field className="register-input" type="email" name="email" placeholder="E-mail"/>
                        <div className='error-msg'>
                          <ErrorMessage name="email" as='div'/>
                        </div>
                      </div>
                      <div  className="register-input-box">
                        <label htmlFor="password">*Password</label>
                        <Field className="register-input" type="password" name="password" placeholder="Password"/>
                        <div className='error-msg'>
                          <ErrorMessage name="password" as='div'/>
                        </div>
                      </div>
                      <div  className="register-input-box">
                        <label htmlFor="passwordConfirmation">*Password</label>
                        <Field className="register-input" type="password" name="passwordConfirmation" placeholder="Repeate Password"/>
                        <div className='error-msg'>
                          <ErrorMessage name="passwordConfirmation" as='div'/>
                        </div> 
                      </div>                        
                      <div className='register-form-btn-box'>
                        <button type="submit" className="isInActive" onClick={event=>{clickSignIn(event)}}>LOG IN</button>
                        <button type="submit" className="isActive">REGISTRATION</button>
                      </div>
                    </Form>
                  </Formik>
                </div>
            </div>
    );
  }