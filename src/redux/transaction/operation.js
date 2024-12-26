import Axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


const axios = Axios.create({
    baseURL: 'http://localhost:3000/api'
  });


//Add an income

export const addUserIncome = createAsyncThunk(
    'addUserIncome/fetchAddUserIncome', 
    async(income, token) => {

        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.post('/transaction/income',
            //income
            {
                "typeOfTransaction": "income",
                "description": "Selary",
                "amount": "500",
                "date": "2024-10-03",
                "category": "Food"
              }
        )
        return resp.data
})

//Get income stats

export const getUserIncome = createAsyncThunk(
    'getUserIncome/fetchGetUserIncome', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/income')
        return resp.data
})


//Add an expense
export const addUserExpense = createAsyncThunk(
    'addUserExpense/fetchAddUserExpense', 
    async(expense, token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.post('/transaction/expense',
            //expense
            {
                "typeOfTransaction": "expense",
                "description": "Diner",
                "amount": "500",
                "date": "2024-10-03",
                "category": "Food"
            }
        )
        return resp.data
})

//Get expense stats
export const getUserExpense = createAsyncThunk(
    'getUserExpense/fetchGetUserExpense', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/expense')
        return resp.data
})

// Delete transaction
export const deleteUserExpense = createAsyncThunk(
    'deleteUserExpense/fetchDeleteUserExpense', 
    async(transactionId,token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get(`/transaction/${transactionId}`)
        return resp.data
})


//Get categories for incomes

export const userIncomeCategory = createAsyncThunk(
    'userIncomeCategory/fetchUserIncomeCategory', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/income-categories')
        return resp.data
})


//Get categories for expenses

export const userExpenseCategory = createAsyncThunk(
    'userExpenseCategory/fetchUserExpenseCategory', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/expense-categories')
        return resp.data
})

//Get transactions data for a specific period

export const userTransactionPeriodDate = createAsyncThunk(
  "userTransactionPeriodDate/fetchUserTransactionPeriodDate",
  async (monthIndex, year, token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const resp = await axios.get(
      `/transaction/period-data?monthIndex=${monthIndex}&year=${year}`
    );
    return resp.data;
  }
);
