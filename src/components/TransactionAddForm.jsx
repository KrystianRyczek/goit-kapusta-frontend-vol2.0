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
  const { category, fetchCategories } = useTransactionAddForm();
  const selectCategorys = category(activeSheet);
  const [hasClickedCategory, setHasClickedCategory] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const initialValues = {
    typeOfTransaction: activeSheet === 'expenses' ? 'expense' : 'income',
    description: "",
    amount: "",
    date: "",
    category: "Products",
    owner: "user"
  };

  useEffect(() => {
    initialValues.typeOfTransaction = activeSheet === 'expenses' ? 'expense' : 'income';
  }, [activeSheet]);

  const handleCategoryClick = () => {
    if (!hasClickedCategory) {
      fetchCategories(activeSheet);
      setHasClickedCategory(true);
    }
  };

  return (
    <div className='transaction-add-form-container'>
      <Formik
        name="addTransaction"
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values, actions) => {
          const { typeOfTransaction, description, amount, date, category, owner } = values;

          console.log("Form values:", values);

          const amountNumber = parseFloat(amount);

          if (description && !isNaN(amountNumber) && category) {
            try {
              let response;
              if (typeOfTransaction === 'expense') {
                response = await dispatch(addUserExpense({
                  expense: { typeOfTransaction, description, amount: amountNumber, category, date, owner },
                  token
                }));
              } else if (typeOfTransaction === 'income') {
                response = await dispatch(addUserIncome({
                  income: { typeOfTransaction, description, amount: amountNumber, category, date, owner },
                  token
                }));
              }
              if (response.payload) {
                console.log("Transakcja została prawidłowo wysłana na serwer:", response.payload);
              } else {
                console.error("Błąd podczas wysyłania transakcji:", response.error);
              }
            } catch (error) {
              console.error("Błąd wysyłania transakcji:", error);
            }
          } else {
            console.log("Brak wymaganych danych w formularzu.");
          }

          actions.resetForm();
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
              onClick={handleCategoryClick}
            >
              <option defaultValue>Product category</option>
              {selectCategorys.map((category) => <Option category={category} key={uuidv4()} />)}
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