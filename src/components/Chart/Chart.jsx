import '../../App.css';
import { useReportChart } from '../../hooks/useReportChart';
import { selectSelectedDate } from '../../redux/storeSlice';
import css from './Chart.module.css';
import { useSelector } from "react-redux";
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

export function Chart({ activeSheet }) {
  const { summaryReportData } = useReportChart();
  const sumaryData = summaryReportData(activeSheet);
  const selectedDate = useSelector(selectSelectedDate) // {monthIndex: 9, year: 2024} - data wybrana na przełączniku 

  console.log(selectedDate)

  const safeSelectedDate = selectedDate || { monthIndex: 0, year: new Date().getFullYear() };


  const groupedData = sumaryData.reduce((acc, { description, amount, date }) => {
    const existing = acc.find((item) => item.description === description);
    if (existing) {
      existing.amount += amount;
    } else {
      acc.push({ description, amount, date });
    }
    return acc;
  }, []);


  const filteredData = groupedData.filter(transaction => {
      
    const date = new Date(transaction.date);
    const transactionMonthYear = date.toISOString().slice(0, 7);
    const selectedMonthYear = `${safeSelectedDate.year}-${String(safeSelectedDate.monthIndex + 1).padStart(2, '0')}`;

    return transactionMonthYear === selectedMonthYear;
  })

  const sortedData = filteredData.sort((a, b) => b.amount - a.amount);

  return (
    <div>
      <div className={css.box}>
        <ResponsiveContainer width="100%" height="100%" className={css.chart}>
          <BarChart data={sortedData}>
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
              <LabelList dataKey="amount" position="top" fill="#5e6373" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
