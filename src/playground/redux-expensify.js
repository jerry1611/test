import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id
  }
});

const expensesdefaultState = [];
const expensesReducer = (state = expensesdefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.expense.id;
      });
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

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 30 })
);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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
