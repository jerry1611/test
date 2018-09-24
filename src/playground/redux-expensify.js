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

const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};

const setTextFilter = ({ text = '' } = {}) => {
  return {
    type: 'SET_FILTER',
    text
  };
};

const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};

const setStartDate = startDate => {
  return {
    type: 'START_DATE',
    startDate
  };
};

const setEndDate = endDate => {
  return {
    type: 'END_DATE',
    endDate
  };
};

const expensesdefaultState = [];
const expensesReducer = (state = expensesdefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.expense.id;
      });
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else return expense;
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
    case 'SET_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'START_DATE':
      return { ...state, startDate: action.startDate };
    case 'END_DATE':
      return { ...state, endDate: action.endDate };
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
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter({ text: 'random' }));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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

// const user = {
//   name: 'Jen',
//   age: 24
// };

// console.log({
//   age: 29,
//   ...user,
//   location: 'Minnesota'
// });
