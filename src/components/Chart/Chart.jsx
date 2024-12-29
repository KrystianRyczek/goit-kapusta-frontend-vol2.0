import '../../App.css';
import { useReportChart } from '../../hooks/useReportChart';
import css from './Chart.module.css';
import { useSelectedDate } from "../../hooks/useSelectedDate"

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from 'recharts';

export function Chart({ activeSheet, selectedCategory }) {
  const { summaryReportData } = useReportChart();
  const sumaryData = summaryReportData(activeSheet);

  console.log("sumaryData:", sumaryData)


  console.log("selectedCategory:", selectedCategory);

  const { selectedDate } = useSelectedDate();


  const groupedData = sumaryData.reduce((acc, { description, amount, date, category }) => {
    const existing = acc.find((item) => item.description === description);
    if (existing) {
      existing.amount += amount;
    } else {
      acc.push({ description, amount, date, category });
    }
    return acc;
  }, []);

  console.log("groupedData:", groupedData)

  const filteredData = groupedData.filter(transaction => {
      
    const date = new Date(transaction.date);
    const transactionMonthYear = date.toISOString().slice(0, 7);
    const selectedMonthYear = `${selectedDate.year}-${String(selectedDate.monthIndex + 1).padStart(2, '0')}`;

    const isSameMonth = transactionMonthYear === selectedMonthYear;

  
    const isSameCategory = transaction.category === selectedCategory;

  
    return isSameMonth && isSameCategory;
  })

  const sortedData = filteredData.sort((a, b) => b.amount - a.amount).slice(0, 6);

  console.log("sortedData:", sortedData)

  return (
    <div>
      <div className={css.box}>
        <ResponsiveContainer width="100%" height="100%" className={css.chart}>
          <BarChart data={sortedData} margin={{ top: 40 }}>
            <CartesianGrid vertical={false} horizontal={true} />
            <XAxis
              dataKey="description"
              axisLine={{ stroke: '#ccc' }}
              tickSize={0}
              tickMargin={10}
            />
            <YAxis hide={true} />
            <Bar
              dataKey="amount"
              fill="#ff751d"
              radius={[10, 10, 0, 0]}
              barSize={38}
              isAnimationActive={true}
              animationDuration={800}
              animationEasing="ease-in"
            >
              {sortedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 2 === 0 ? '#ff751d' : '#ffdac0'}
                />
              ))}
              <LabelList dataKey="amount" position="top" fill="#5e6373"  />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

