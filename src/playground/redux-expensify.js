import { createStore, combineReducers } from 'redux';

const expensesdefaultState = [];
const expensesReducer = (state = expensesdefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const filterdefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterdefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);
console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: 'heh',
      description: 'Rent',
      note: 'This is rent payment',
      amount: 56400,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
