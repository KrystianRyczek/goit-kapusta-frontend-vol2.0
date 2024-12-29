import "../css/Balance.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useBalance } from "../hooks/useBalance";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WelcomeModal from "./WelcomeModal";
import { setBalance } from "../redux/storeSlice";
import { updateBalance } from "../redux/transaction/operation";

export default function Balance() {
  const { balanceShema } = useBalance();
  const [isWelcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.store.balance);

  const initialValues = { balance };

  useEffect(() => {
    console.log("useEffect called, balance:", balance);
    if (balance === 0) {
      setWelcomeModalOpen(true);
    }
  }, [balance]);

  const closeWelcomeModal = () => {
    setWelcomeModalOpen(false);
  };

  const handleSubmit = async (values, actions) => {
    console.log("handleSubmit called, values:", values);
    try {
      // Wyślij dane do backendu
      const result = await dispatch(updateBalance(values.balance)).unwrap();
      console.log("updateBalance result:", result);

      actions.setSubmitting(false);
    } catch (error) {
      console.error("Failed to update balance:", error);
      actions.setSubmitting(false);
    }
  };

  console.log("Balance component rendered, initialValues:", initialValues);

  return (
    <div className="balance-container">
      <p className="balance-p1">Balance</p>
      <Formik
        validationSchema={balanceShema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="balance-form">
            <div style={{ position: "relative" }}>
              <Field
                className="balance-input"
                type="text"
                name="balance"
                placeholder="0"
              />
              {values.balance === 0 && isWelcomeModalOpen && (
                <div className="welcome-modal-container">
                  <WelcomeModal
                    isOpen={isWelcomeModalOpen}
                    onClose={closeWelcomeModal}
                    firstLine="Hello! To get started, enter the current balance of your account!"
                    secondLine="You can't spend money until you have it :)"
                  />
                </div>
              )}
              <div className="error-msg">
                <ErrorMessage name="balance" as="div" />
              </div>
            </div>
            <button type="submit" className="balance-btn">
              Confirm
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
