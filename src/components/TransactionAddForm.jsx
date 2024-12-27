import '../css/TransactionAddForm.css'
import calculator from '../images/calculator.svg'
import {Field, Form, Formik, ErrorMessage} from "formik";
import {useTransactionAddForm} from '../hooks/useTransactionAddForm'
import { v4 as uuidv4 } from 'uuid'

const Option = (category)=>{
  return <option value={category} key={uuidv4()}>{category}</option>
}

export default function TransactionAddForm({activeSheet}) {

  const { category} = useTransactionAddForm()
  const selectCategorys = category(activeSheet)
  return (
    <div className='transaction-add-form-container'>
                        <Formik
                          name="addTransaction"
                          //validationSchema={ShemaSignUp}
                          initialValues={{date:"", description:"", category:"", amount:""}} 
                          onSubmit={
                            (values, actions)=>{
                              console.log(activeSheet)
                            }}>
                          <Form className="transaction-add-form" name="addTransaction">
                            <div className="transaction-add-form-data">
                              <Field className="" type="text" name="date" placeholder="21.11.2019"/>
                              <div className=''>
                                <ErrorMessage name="date" as='div'/>
                              </div>
                            </div>
                            <div className="transaction-add-form-desciption">
                              <Field className="" type="text" name="description" placeholder="Product description"/>
                              <div className=''>
                                <ErrorMessage name="email" as='div' />
                              </div>
                            </div>
                            <div  className="transaction-add-form-category">
                              <Field name="category" as="select" placeholder="Select Category">
                                <option defaultValue>Product category</option>
                                {selectCategorys.map((category)=>{return Option(category)})}
                              </Field>
                              <div className='error-msg'>
                                <ErrorMessage name="password" as='div'/>
                              </div>
                            </div>
                            <div  className="transaction-add-form-amount">
                              <Field className="" type="text" name="amount" placeholder="0.00"/>
                              <img className="calculator-icon" src={calculator}  alt="calculator"/>
                              <div className=''>
                                <ErrorMessage name="amount" as='div'/>
                              </div> 
                            </div>                        
                            <div className='transaction-add-form-btn-box'>
                              <button type="submit" >INPUT</button>
                              <button type="button" onClick={()=>{}}>CLEAR</button>
                            </div>
                          </Form>
                        </Formik>
    </div>
  );
}