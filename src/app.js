import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expensesSelector';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 100 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300 }));
store.dispatch(setTextFilter('gas'));
const state = store.getState();
const data = getVisibleExpenses(state.expenses, state.filters);
console.log(data);
ReactDOM.render(<AppRouter />, document.getElementById('app'));
