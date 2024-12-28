import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  changeSelectedDate,
  selectSelectedDate,
  selectToken,
} from '../redux/storeSlice.js';
import { userTransactionPeriodDate } from '../redux/transaction/operation';

export const useSelectedDate = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const storedDate = localStorage.getItem('selectedDate');
  const initialDate = storedDate
    ? JSON.parse(storedDate)
    : { monthIndex: new Date().getMonth(), year: new Date().getFullYear() };

  const selectedDate = useSelector(selectSelectedDate) || initialDate;

  useEffect(() => {
    localStorage.setItem('selectedDate', JSON.stringify(selectedDate));
    if (token && selectedDate) {
      dispatch(
        userTransactionPeriodDate({
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

  return { selectedDate, setSelectedDate };
};
