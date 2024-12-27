// /** @format */

// import { useSelector } from "react-redux";
// import { Chart } from "../Chart/Chart";
// import ReportsIconSet from "../ReportsIconSet/ReportsIconSet";
// import ReportsIncExpSum from "../ReportsIncExpSum/ReportsIncExpSum";
// import { selectExpense } from "../../redux/storeSlice";

// export default function ReportExpenses() {
//   const allExpenses = useSelector(selectExpense);
//   // roboczo danymi do wykresu są wszystkie wydatki
//   return (
//     <div>
//       <ReportsIncExpSum />
//       <ReportsIconSet />
//       <Chart arrOfDataChart={allExpenses} />
//     </div>
//   );
// }
