import '../css/TransactionTable.css'

export default function TransactionTable({activeSheet}) {

  
    return (
      <div className=''>
        <div className='transaction-table-head-container'>
          <p className='transaction-table-head'>DATE</p>
          <p className='transaction-table-head'>DESCRIPTION</p>
          <p className='transaction-table-head'>CATEGORY</p>
          <p className='transaction-table-head'>SUM</p>
          <p className='transaction-table-head'>DELATE</p>
        </div>
        <div className='transaction-table-box'>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
          <div className='transaction-table-row'></div>
        </div>
      </div>

              
    );
  }