import '../App.css';
import { selectIncomesStat, selectExpenseStat } from '../redux/storeSlice.js';
import css from '../css/ReportsIncExpSum.module.css';
import { useSelector } from 'react-redux';
import { useSelectedDate } from '../hooks/useSelectedDate';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function ReportsIncExpSum() {
  const { selectedDate } = useSelectedDate();
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

  return (
    <div>
      <div className={css.bar}>
        <p>Expenses:</p>
        <p className={css.textExpense}>- {`${monthExpense}`}</p>
        <p>Incomes:</p>
        <p className={css.textIncome}>{`${monthIncome}`}</p>
      </div>
    </div>
  );
}
