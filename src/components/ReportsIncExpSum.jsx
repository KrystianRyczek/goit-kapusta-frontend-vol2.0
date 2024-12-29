import '../App.css';
import { selectIncomesStat, selectExpenseStat } from '../redux/storeSlice.js';
import css from '../css/ReportsIncExpSum.module.css';
import { useSelector } from 'react-redux';
import { useSelectedDate } from '../hooks/useSelectedDate';

export default function ReportsIncExpSum() {
  const { selectedDate, monthNames } = useSelectedDate();
  // console.log('selectedDate', selectedDate);

  const totalIncomeYear = useSelector(selectIncomesStat);
  const totalExpenseYear = useSelector(selectExpenseStat);
  // console.log('totalExpenseYear', totalExpenseYear);
  // console.log('totalIncomeYear', totalIncomeYear);

  const monthIndex = selectedDate.monthIndex;
  // console.log('monthIndex', monthIndex);

  const monthName = monthNames[monthIndex];

  let monthIncome = 0;
  if (totalIncomeYear) {
    const entry = totalIncomeYear.find((item) =>
      item.hasOwnProperty(monthName)
    );
    monthIncome = entry ? entry[monthName] : 0;
  }
  // console.log('month income', monthIncome);

  let monthExpense = 10;
  if (totalExpenseYear) {
    const entry = totalExpenseYear.find((item) =>
      item.hasOwnProperty(monthName)
    );
    monthExpense = entry ? entry[monthName] : 0;
  }
  // console.log('month expense', monthExpense);

  return (
    <div>
      <div className={css.bar}>
        <div className={css.toWrap}>
          <p>Expenses:</p>
          <p className={css.textExpense}>- {`${monthExpense}`}</p>
        </div>
        <div className={css.line}></div>
        <div className={css.toWrap}>
          <p>Incomes:</p>
          <p className={css.textIncome}>+ {`${monthIncome}`}</p>
        </div>
      </div>
    </div>
  );
}
