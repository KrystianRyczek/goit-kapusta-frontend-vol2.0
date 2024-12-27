import "../css/Report.css";
import "../css/Transaction.css";
import { Chart } from "./Chart/Chart";
import ReportDataSelection from "./ReportDateSelection";
import ReportsIconSet from "./ReportsIconSet/ReportsIconSet";
import ReportsIncExpSum from "./ReportsIncExpSum/ReportsIncExpSum";
export default function Report({ activeSheet, expensesClass, incomesClass }) {
  return (
    <>
      <ReportDataSelection />
      <ReportsIncExpSum activeSheet={activeSheet} />
      <ReportsIconSet
        activeSheet={activeSheet}
        expensesClass={expensesClass}
        incomesClass={incomesClass}
      />
      <Chart activeSheet={activeSheet} />
    </>
  );
}
