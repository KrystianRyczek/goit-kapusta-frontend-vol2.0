import React from 'react';
import '../../App.css';
import '../../css/Transaction.css';
import css from './ReportsIconSet.module.css';
import { useLocation } from 'react-router';
import { expencesIcons, incomeIcons } from './icons';
import ReportNavBtn from '../ReportNavBtn';

export default function ReportsIconSet({
  activeSheet,
  expensesClass,
  incomesClass,
  selectCategory,   
  onCategoryChange, 
}) {
  const location = useLocation();

  const handleClickIcon = (category) => {
    onCategoryChange(category); 
  };

  return (
    <div>
      <div className={css.box}>
        <ReportNavBtn
          activeSheet={activeSheet}
          expensesClass={expensesClass}
          incomesClass={incomesClass}
        />

        <div className={css.icons}>
          {location.pathname === '/transaction/reports/expenses'
            ? expencesIcons.map((icon, index) => (
                <React.Fragment key={index}>
                  <div key={index} className={css.div_svg} onClick={() => handleClickIcon(icon[1])}>
                    <svg className={css.svg}>
                      <use href={icon[0]}></use>
                    </svg>
                    <div className={css.div_background_svg}></div>
                    <p className={css.text_icon}>{icon[1]}</p>
                  </div>
                  {(index + 1) % 3 === 0 && <div className={css.line}></div>}
                </React.Fragment>
              ))
            : incomeIcons.map((icon, index) => (
              <div key={index} className={css.div_svg} onClick={() => handleClickIcon(icon[1])}>
                <svg className={css.svg}>
                  <use href={icon[0]}></use>
                </svg>
                <div className={css.div_background_svg}></div>
                <p className={css.text_icon}>{icon[1]}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}