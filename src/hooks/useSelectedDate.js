import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  changeSelectedDate,
  selectSelectedDate,
  selectToken,
} from '../redux/storeSlice.js';
import { userTransactionPeriodDate } from '../redux/transaction/operation';

export const useSelectedDate = () => {
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

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  // const storedDate = localStorage.getItem('selectedDate');
  // const initialDate = storedDate
  //   ? JSON.parse(storedDate)
  //   : { monthIndex: new Date().getMonth(), year: new Date().getFullYear() };
  // const initialDate = {
  //   monthIndex: new Date().getMonth(),
  //   year: new Date().getFullYear(),
  // };

  let selectedDate = localStorage.getItem('selectedDate');

  // const selectedDate = useSelector(selectSelectedDate);
  //|| initialDate; // bez lub wtedy to będzie na sztywno data aktualna,
  // albo initial state albo też do local storage, a tu w hooku obsłużyć jedynie zmianę tej daty przez klik
  // wpisać aktualną datę w initial state, sam dzień, bez konkretnej godziny
  // tak jakby teraz wartość jest non stop nadpisywana selectedDate
  useEffect(() => {
    localStorage.setItem('selectedDate', JSON.stringify(selectedDate));
    if (token && selectedDate) {
      dispatch(
        userTransactionPeriodDate({
          // albo tutaj ma być  //3.selectedDate  changeSelectedDate
          monthIndex: selectedDate.monthIndex,
          year: selectedDate.year,
          token,
        })
      );
    }
  }, [selectedDate, token]);

  const setSelectedDate = (newDate) => {
    const monthIndex = newDate.getMonth();
    const year = newDate.getFullYear();
    dispatch(changeSelectedDate({ monthIndex, year }));
  };

  return { selectedDate, setSelectedDate, monthNames };
};
