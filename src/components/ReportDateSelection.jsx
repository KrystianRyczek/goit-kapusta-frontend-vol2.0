import css from '../css/ReportDateSelection.module.css';
import { useSelectedDate } from '../hooks/useSelectedDate';

export default function ReportDateSelection() {
  const { selectedDate, setSelectedDate, monthNames } = useSelectedDate();
  const [errorMessage, setErrorMessage] = useState('');

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
    console.log('Navigating back to the main page');
  };

  const formatDate = (monthIndex, year) => {
    return `${monthNames[monthIndex]} ${year}`;
  };

  return (
    <div className={css.box}>
      <div className={css.back}>
        <button onClick={handleBack} className={css.arrowBtn}>
          {'<-'}
        </button>
        <p>Main page</p>
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
      </div>
    </div>
  );
}
