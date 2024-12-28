import '../../App.css';
import {
  selectIncomesStat,
  selectExpenseStat,
  selectSelectedDate,
} from '../../redux/storeSlice';
import css from '../../css/ReportsIncExpSum.module.css';
import { useSelector } from 'react-redux';

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
  const storedDate = localStorage.getItem('selectedDate');
  const initialDate = storedDate
    ? JSON.parse(storedDate)
    : { monthIndex: new Date().getMonth(), year: new Date().getFullYear() };

  const selectedDate = useSelector(selectSelectedDate) || initialDate;
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
