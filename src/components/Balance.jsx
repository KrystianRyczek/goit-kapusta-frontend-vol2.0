import "../css/Balance.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useBalance } from "../hooks/useBalance";
import { useState, useEffect } from "react";
import WelcomeModal from "./WelcomeModal";

export default function Balance() {
  const { balanceShema, balance, setBalance } = useBalance();

  const [isWelcomeModalOpen, setWelcomeModalOpen] = useState(false);

  useEffect(() => {
    console.log("useEffect called, balance:", balance);
    if (balance === 0) {
      setWelcomeModalOpen(true);
    } else {
      setWelcomeModalOpen(false);
    }
  }, [balance]);

  const closeWelcomeModal = () => {
    setWelcomeModalOpen(false);
  };

  const initialValues = { balance };

  console.log("Balance -> initialValues:", initialValues);

  return (
    <div className="balance-container">
      <p className="balance-p1">Balance</p>
      <Formik
        validationSchema={balanceShema}
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values, actions) => {
          //actions.resetForm()
          setBalance(values, actions);
        }}
      >
        {({ values }) => (
          <Form className="balance-form">
            <div style={{ position: "relative" }}>
              <Field
                className="balance-input"
                type="number"
                name="balance"
                placeholder="0"
              />
              {/* Jeśli balance === 0, pokazujemy modal */}
              {Number(values.balance) === 0 && isWelcomeModalOpen && (
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
