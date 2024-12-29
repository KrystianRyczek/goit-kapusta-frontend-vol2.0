import { useState } from 'react';
import css from '../css/ReportDateSelection.module.css';
import { useSelectedDate } from '../hooks/useSelectedDate';
import arrowIcon from '../images/arrow.png'
import { useBtnGoBack } from '../hooks/useBtnGoBack';

export default function ReportDateSelection() {
  const { selectedDate, setSelectedDate, monthNames } = useSelectedDate();

  const [errorMessage, setErrorMessage] = useState('');

  const handlePrevious = () => {
    setErrorMessage('');
    const previousDate = new Date(
      selectedDate.year,
      selectedDate.monthIndex - 1
    );
    setSelectedDate(previousDate);
  };

  const handleNext = () => {
    const nextDate = new Date(selectedDate.year, selectedDate.monthIndex + 1);
    // PONIŻEJ COŚ NIE DZIAŁA
    // if (
    //   nextDate.getFullYear() > selectedDate.getFullYear() ||
    //   (nextDate.getFullYear() === selectedDate.getFullYear() &&
    //     nextDate.getMonth() > selectedDate.getMonth())
    // ) {
    //   setErrorMessage('You cannot move forward');
    //   return;
    // }
    // setErrorMessage('');
    setSelectedDate(nextDate);
  };

  // const handleBack = () => {
  //   console.log('Navigating back to the main page');
  // };

  const { handleBack } = useBtnGoBack();

  const formatDate = (monthIndex, year) => {
    return `${monthNames[monthIndex]} ${year}`;
  };

  return (
    <div className={css.box}>
      <div className={css.back}>
        <button onClick={handleBack} className={css.goBackBtn}>
          <img src={arrowIcon} alt="Go Back" className={css.arrowIcon} />
          Main page
        </button>
      </div>
      <div className={css.dataNav}>
        <p>Current period:</p>
        <div className={css.dataArrows}>
          <button onClick={handlePrevious} className={css.arrowBtn}>
            {'<'}
          </button>
          <span className={css.dataBold}>
            {formatDate(selectedDate.monthIndex, selectedDate.year)}
          </span>
          <button onClick={handleNext} className={css.arrowBtn}>
            {'>'}
          </button>
        </div>
        {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
      </div>
    </div>
  );
}
