import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from "react";

import PrivateRoute from './scripts/PrivateRoute';
import "./App.css";
//import {useApp} from './hooks/useApp'
const NavBar = lazy(() => import('./components/NavBar'));

const Incomes = lazy(() => import('./components/Transaction'));
const Expenses = lazy(() => import('./components/Transaction'));
const Home = lazy(() => import('./pages/HomePage'));
const Transaction = lazy(() => import('./pages/TransactionPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Summary = lazy(() => import('./components/Summary'));
const SignIn = lazy(() => import('./components/SignIn'));
const SignUp = lazy(() => import('./components/SignUp'));
function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Suspense fallback={<div>Loading page...</div>}>

      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>
        </Route>
        <Route path="/transaction" element={            
                                        <PrivateRoute
                                          redirectPath="/"
                                          Component={<Transaction/>}
                                        />
                                        }>
          <Route path="incomes" element={<Incomes
                                          activeSheet={'incomes'}
                                          expensesClass={'sheetIsInActive'}
                                          incomesClass={'sheetIsActive'}
                                          />}/>
          <Route path="expenses" element={<Expenses
                                           activeSheet={'expenses'}
                                           expensesClass={'sheetIsActive'}
                                           incomesClass={'sheetIsInActive'}
                                            />}/>
          <Route path="reports" element={<Summary/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>    
      </Routes>
      
      </Suspense>
    </BrowserRouter>


    </>
  );
}

export default App;
