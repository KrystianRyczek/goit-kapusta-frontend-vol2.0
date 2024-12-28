import css from "../css/ReportDateSelection.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeSelectedDate,
  selectSelectedDate,
  selectToken,
} from "../redux/storeSlice";
import { userTransactionPeriodDate } from "../redux/transaction/operation";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ReportDateSelection() {
  const storedDate = localStorage.getItem("selectedDate");
  const initialDate = storedDate
    ? JSON.parse(storedDate)
    : { monthIndex: new Date().getMonth(), year: new Date().getFullYear() };

  const selectedDate = useSelector(selectSelectedDate) || initialDate;

  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
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

  const handleDateChange = (newDate) => {
    const monthIndex = newDate.getMonth();
    const year = newDate.getFullYear();

    dispatch(changeSelectedDate({ monthIndex, year }));
  };

  const handlePrevious = () => {
    const previousDate = new Date(
      selectedDate.year,
      selectedDate.monthIndex - 1
    );
    handleDateChange(previousDate);
  };

  const handleNext = () => {
    const nextDate = new Date(selectedDate.year, selectedDate.monthIndex + 1);
    handleDateChange(nextDate);
  };

  const handleBack = () => {
    console.log("Navigating back to the main page");
  };

  const formatDate = (monthIndex, year) => {
    return `${monthNames[monthIndex]} ${year}`;
  };

  return (
    <div className={css.box}>
      <div className={css.back}>
        <button onClick={handleBack} className={css.arrowBtn}>
          {"<--"}
        </button>
        <p>Main page</p>
      </div>
      <div className={css.dataNav}>
        <p>Current period:</p>
        <div className={css.dataArrows}>
          <button onClick={handlePrevious} className={css.arrowBtn}>
            {"<"}
          </button>
          <span className={css.dataBold}>
            {formatDate(selectedDate.monthIndex, selectedDate.year)}
          </span>
          <button onClick={handleNext} className={css.arrowBtn}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
