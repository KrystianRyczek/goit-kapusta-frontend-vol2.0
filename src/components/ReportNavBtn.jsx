import "../css/TransactionNavBtn.css";
import { useReportNavBtn } from "../hooks/useReportNavBtn";

export default function ReportNavBtn({
  activeSheet,
  expensesClass,
  incomesClass,
}) {
  const { navigateOnClickExpens, navigateOnClickincomes } = useReportNavBtn();

  return (
    <div className="transaction-nav-btn-container">
      <button
        type="submit"
        onClick={() => {
          navigateOnClickExpens(activeSheet);
        }}
        className={`${expensesClass}`}
      >
        EXPENSES
      </button>
      <button
        type="submit"
        onClick={() => {
          navigateOnClickincomes(activeSheet);
        }}
        className={`${incomesClass}`}
      >
        INCOMES
      </button>
    </div>
  );
}
