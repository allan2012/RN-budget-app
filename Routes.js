import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'
import AddIncome from './AddIncome.js'
import AddExpense from './AddExpense.js';
import ExpenseItems from './ExpenseItems.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title="Reactive" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
         <Scene key = "add_income" component = {AddIncome} title = "Add Income" />
         <Scene key = "add_expense" component = {AddExpense} title = "Add Expense" />
         <Scene key = "expenses" component = {ExpenseItems} title = "Monthly Expense Items" />
      </Scene>
   </Router>
)
export default Routes