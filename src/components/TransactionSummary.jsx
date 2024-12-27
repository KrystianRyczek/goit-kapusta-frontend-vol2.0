import '../css/TransactionSummary.css'
import {useTransactionSummary} from '../hooks/useTransactionSummary'
import { v4 as uuidv4 } from 'uuid'


const summaryTableRow =(row)=>{
const  key = Object.keys(row)
  return(
      <div key={uuidv4()} className='summary-table-row'>
        <p>{key[0]}</p>
        <p>{row[key[0]]} PLN</p>
      </div>
  )
}


export default function TransactionSummary({activeSheet}) {

const { summaryTableData } =useTransactionSummary()
const samaryData = summaryTableData(activeSheet)
console.log("samaryData",samaryData )
  return (
    <div className='transaction-summary-box'>
      <div className='summary-table-head'>
      <p className='summary-table-head-p'>SUMMARY</p>
      </div>
      {samaryData.map((item)=>{return summaryTableRow(item)})}
    </div>
            
  );
}

