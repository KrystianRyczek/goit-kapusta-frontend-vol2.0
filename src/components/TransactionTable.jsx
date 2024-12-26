import '../css/TransactionTable.css'
import {useTransactionTable} from '../hooks/useTransactionTable'
import { v4 as uuidv4 } from 'uuid'
import delate from '../images/delete-svg.png'

const transactionTableRow =(row)=>{

  return(
      <div key={uuidv4()} className='transaction-table-row'>
        <p>{row.date}</p>
        <p>{row.description}</p>
        <p>{row.category}</p>
        <p>{row.amount}</p>
        <button className='transaction-table-delate-btn'>
          <img src={delate}  alt="Delate icon"/>
        </button>
      </div>
      )
}
export default function TransactionTable({activeSheet}) {

  const { transactionTableData } =useTransactionTable()
  const transactionData = transactionTableData(activeSheet)
  
    return (
      <div className=''>
        <div className='transaction-table-head-box'>
          <p className='transaction-table-head'>DATE</p>
          <p className='transaction-table-head'>DESCRIPTION</p>
          <p className='transaction-table-head'>CATEGORY</p>
          <p className='transaction-table-head'>SUM</p>
          <p className='transaction-table-head'>DELATE</p>
        </div>
        <div className='transaction-table-box'>
          {transactionData.map((item)=>{return transactionTableRow(item)})}
        </div>
      </div>

              
    );
  }