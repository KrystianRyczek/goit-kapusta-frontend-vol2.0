import React, { useState } from 'react';
import '../css/Report.css';
import '../css/Transaction.css';
import { Chart } from './Chart/Chart';
import ReportDataSelection from './ReportDateSelection';
import ReportsIconSet from './ReportsIconSet/ReportsIconSet';
import ReportsIncExpSum from './ReportsIncExpSum';

export default function Report({ activeSheet, expensesClass, incomesClass }) {
  const [selectCategory, setSelectCategory] = useState("Products");

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  };

  return (
    <>
      <ReportDataSelection />
      <ReportsIncExpSum activeSheet={activeSheet} />
      
      <ReportsIconSet
        activeSheet={activeSheet}
        expensesClass={expensesClass}
        incomesClass={incomesClass}
        selectCategory={selectCategory}
        onCategoryChange={handleCategoryChange} 
      />
      
      <Chart
        activeSheet={activeSheet}
        selectedCategory={selectCategory} 
      />
    </>
  );
}