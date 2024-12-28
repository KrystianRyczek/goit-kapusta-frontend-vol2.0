import '../css/Balance.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useBalance } from '../hooks/useBalance';

export default function Balance() {
  const {balanceShema, setBalance} = useBalance();

  return (
    <div className="balance-container">
      <p className="balance-p1">Balance</p>
      <Formik
        validationSchema={balanceShema}
        initialValues={{ balance: 0 }}
        onSubmit={(values, actions) => {
          setBalance(values, actions)      
        }}
      >
        <Form className="balance-form">
          <div>
            <Field
              className="balance-input"
              type="text"
              name="balance"
              placeholder="0"
            />
            <div className="error-msg">
              <ErrorMessage name="balance" as="div" />
            </div>
          </div>
          <button type="submit" className="balance-btn">
            Confirm
          </button>
        </Form>
      </Formik>
    </div>
  );
}
