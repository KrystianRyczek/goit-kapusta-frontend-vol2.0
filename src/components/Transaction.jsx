import '../css/Transaction.css'
import BtnToReports from './BtnToReports';
import TransactionNavBtn from './TransactionNavBtn';
import TransactionAddForm from './TransactionAddForm';
import TransactionTable from './TransactionTable';
import TransactionSummary from './TransactionSummary';

export default function Transaction({activeSheet, expensesClass, incomesClass}) {

  
  return (
        <div className="transaction-container">
          <BtnToReports/>
            <TransactionNavBtn
              activeSheet = {activeSheet}
              expensesClass={expensesClass}
              incomesClass={incomesClass}
            />
          <div className='transaction-sheet'>
            <TransactionAddForm
              activeSheet = {activeSheet}
            />
            <div className='transaction-tables-box'>
              <TransactionTable
                activeSheet = {activeSheet}
              />
              <TransactionSummary
                activeSheet = {activeSheet}
              />
            </div>
          </div>
        </div>

  );
}