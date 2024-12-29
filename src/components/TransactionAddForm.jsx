import '../css/TransactionAddForm.css';
import calculator from '../images/calculator.svg';
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useState, useEffect } from 'react';
import { useTransactionAddForm } from '../hooks/useTransactionAddForm';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addUserExpense, addUserIncome } from '../redux/transaction/operation';
import { selectToken } from '../redux/storeSlice';

const Option = ({ category }) => {
  return <option value={category} key={uuidv4()}>{category}</option>;
};

export default function TransactionAddForm({ activeSheet }) {
  const {category, useEffectGetCategory, addTransaction } = useTransactionAddForm();
  // const selectCategorys = category(activeSheet);
  // const [hasClickedCategory, setHasClickedCategory] = useState(false);
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);

  useEffectGetCategory()
  const selectCategory = category(activeSheet)

  const initialValues = {
    typeOfTransaction: activeSheet === 'expenses' ? 'expense' : 'income',
    description: "",
    amount: "",
    date: "",
    category: "Products",
    owner: "user"
  };



  return (
    <div className='transaction-add-form-container'>
      <Formik
        name="addTransaction"
        initialValues={{date:"", description:"", category:'', amount:''}}
        enableReinitialize
        onSubmit={ (values, actions ) => {
          console.log(activeSheet)
          addTransaction({values, activeSheet} )
          //actions.resetForm();
        }}
      >
        <Form className="transaction-add-form" name="addTransaction">
          <div className="transaction-add-form-data">
            <Field className="" type="date" name="date" placeholder={new Date().toLocaleDateString()} />
            <div className=''>
              <ErrorMessage name="date" as='div' />
            </div>
          </div>

          <div className="transaction-add-form-desciption">
            <Field className="" type="text" name="description" placeholder="Product description" />
            <div className=''>
              <ErrorMessage name="description" as='div' />
            </div>
          </div>

          <div className="transaction-add-form-category">
            <Field
              name="category"
              as="select"
              placeholder="Select Category"
            >
              <option defaultValue>Product category</option>
              {selectCategory.map((category) => <Option category={category} key={uuidv4()} />)}
            </Field>
            <div className='error-msg'>
              <ErrorMessage name="category" as='div' />
            </div>
          </div>

          <div className="transaction-add-form-amount">
            <Field className="" type="text" name="amount" placeholder="0.00" />
            <img className="calculator-icon" src={calculator} alt="calculator" />
            <div className=''>
              <ErrorMessage name="amount" as='div' />
            </div>
          </div>

          <div className='transaction-add-form-btn-box'>
            <button type="submit">INPUT</button>
            <button type="button" onClick={() => {}}>CLEAR</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}